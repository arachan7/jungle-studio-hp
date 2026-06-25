import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';
import { verifySameOrigin } from '@/lib/editorSecurity';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';
const BRANCH = 'master';
const MAX_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES: Record<string, 'jpg' | 'png' | 'webp'> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

function detectImageExt(buffer: Buffer): 'jpg' | 'png' | 'webp' | null {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return 'jpg';
  }
  if (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return 'png';
  }
  if (
    buffer.length >= 12 &&
    buffer.toString('ascii', 0, 4) === 'RIFF' &&
    buffer.toString('ascii', 8, 12) === 'WEBP'
  ) {
    return 'webp';
  }
  return null;
}

function resolveTargetBranch(input: FormDataEntryValue | null): { branch: string } | { error: string } {
  if (input === null) return { branch: BRANCH };
  if (typeof input !== 'string') return { error: 'Invalid branch' };
  if (/^(master|draft-slot-1)$/.test(input)) return { branch: input };
  return { error: 'Invalid branch' };
}

export async function POST(req: Request) {
  if (!verifySameOrigin(req)) {
    return Response.json({ error: 'Invalid request origin' }, { status: 403 });
  }
  if (!verifySessionFromRequest(req)) {
    return Response.json({ error: 'Authentication required' }, { status: 401 });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return Response.json({ error: 'GITHUB_TOKEN is not configured' }, { status: 500 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const file = form.get('file');
  const eid = (form.get('eid') as string | null)?.trim() ?? '';
  const branchResult = resolveTargetBranch(form.get('branch'));

  if (!(file instanceof File)) {
    return Response.json({ error: 'File is required' }, { status: 400 });
  }
  if ('error' in branchResult) {
    return Response.json({ error: branchResult.error }, { status: 400 });
  }
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(eid)) {
    return Response.json({ error: 'Invalid eid' }, { status: 400 });
  }
  if (file.size <= 0 || file.size > MAX_SIZE) {
    return Response.json({ error: 'File size must be between 1 byte and 5MB' }, { status: 400 });
  }

  const declaredExt = ALLOWED_TYPES[file.type];
  if (!declaredExt) {
    return Response.json({ error: 'Only JPEG, PNG, and WebP are allowed' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const detectedExt = detectImageExt(buffer);
  if (!detectedExt || detectedExt !== declaredExt) {
    return Response.json({ error: 'File content does not match the image type' }, { status: 400 });
  }

  const filename = `${eid}-${Date.now()}.${declaredExt}`;
  const repoPath = `public/${filename}`;
  const octokit = new Octokit({ auth: token });

  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: repoPath,
      message: `Visual editor: upload image (${filename})`,
      content: buffer.toString('base64'),
      branch: branchResult.branch,
    });
  } catch (e) {
    console.error('upload error', e);
    return Response.json({ error: 'Upload failed' }, { status: 502 });
  }

  return Response.json({ path: `/${filename}` });
}
