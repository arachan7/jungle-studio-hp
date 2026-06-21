import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';
const BRANCH = 'master';

const ALLOWED_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req: Request) {
  if (!verifySessionFromRequest(req)) {
    return Response.json({ error: '認証が必要です' }, { status: 401 });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return Response.json({ error: 'GITHUB_TOKEN が未設定です' }, { status: 500 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return Response.json({ error: '不正なリクエストです' }, { status: 400 });
  }

  const file = form.get('file');
  const eid = (form.get('eid') as string | null)?.trim() ?? '';

  if (!(file instanceof File)) {
    return Response.json({ error: 'ファイルがありません' }, { status: 400 });
  }
  if (!eid) {
    return Response.json({ error: 'eid がありません' }, { status: 400 });
  }

  const ext = ALLOWED_TYPES[file.type];
  if (!ext) {
    return Response.json(
      { error: 'JPEG / PNG / WebP のみアップロードできます' },
      { status: 400 },
    );
  }
  if (file.size > MAX_SIZE) {
    return Response.json({ error: 'ファイルサイズは5MBまでです' }, { status: 400 });
  }

  // eid をファイル名として安全な文字に限定
  const safeEid = eid.replace(/[^a-zA-Z0-9_-]/g, '');
  const filename = `${safeEid}-${Date.now()}.${ext}`;
  const repoPath = `public/${filename}`;

  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString('base64');

  const octokit = new Octokit({ auth: token });

  try {
    // 同名ファイルが存在する場合は sha を取得して上書き
    let sha: string | undefined;
    try {
      const existing = await octokit.repos.getContent({
        owner: OWNER,
        repo: REPO,
        path: repoPath,
        ref: BRANCH,
      });
      if (!Array.isArray(existing.data) && 'sha' in existing.data) {
        sha = existing.data.sha;
      }
    } catch {
      // 存在しなければ新規作成
    }

    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: repoPath,
      message: `ビジュアルエディタ: 画像アップロード (${filename})`,
      content: base64,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    });
  } catch (e) {
    console.error('upload error', e);
    return Response.json({ error: 'アップロードに失敗しました' }, { status: 502 });
  }

  return Response.json({ path: `/${filename}` });
}
