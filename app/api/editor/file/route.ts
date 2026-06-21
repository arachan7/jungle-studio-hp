import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';
import { verifySameOrigin } from '@/lib/editorSecurity';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';
const BRANCH = 'master';
const MAX_CHANGES = 100;
const MAX_TEXT_LENGTH = 10_000;

const ALLOWED_FILES = new Set<string>([
  'app/components/HomeContent.tsx',
  'app/faq/FaqContent.tsx',
  'app/flow/FlowContent.tsx',
  'app/tips/TipsContent.tsx',
  'app/column/shichigosan/ColumnContent.tsx',
  'app/column/half-birthday/ColumnContent.tsx',
  'app/column/birthday/ColumnContent.tsx',
  'app/column/omiyamairi/ColumnContent.tsx',
  'app/column/newborn/ColumnContent.tsx',
  'app/column/maternity/ColumnContent.tsx',
  'app/column/nyuugaku/ColumnContent.tsx',
  'app/news/grand-open/NewsContent.tsx',
]);

type Change = { eid: string; type: 'text' | 'image'; value: string };

function isAllowedFile(filePath: string): boolean {
  if (ALLOWED_FILES.has(filePath)) return true;
  return /^app\/column\/[a-z0-9-]+\/ColumnContent\.tsx$/.test(filePath);
}

function isValidEid(eid: string): boolean {
  return /^[a-zA-Z0-9_-]{1,80}$/.test(eid);
}

function isValidImagePath(value: string): boolean {
  return /^\/[a-zA-Z0-9_-]+-\d+\.(jpg|png|webp)$/.test(value);
}

function normalizeChange(input: unknown): Change | null {
  if (!input || typeof input !== 'object') return null;
  const raw = input as { eid?: unknown; type?: unknown; value?: unknown };
  if (typeof raw.eid !== 'string' || !isValidEid(raw.eid)) return null;
  if (raw.type !== 'text' && raw.type !== 'image') return null;
  if (typeof raw.value !== 'string') return null;
  if (raw.type === 'text' && raw.value.length > MAX_TEXT_LENGTH) return null;
  if (raw.type === 'image' && !isValidImagePath(raw.value)) return null;
  return { eid: raw.eid, type: raw.type, value: raw.value };
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findBlock(
  source: string,
  eid: string,
): { start: number; end: number } | null {
  const e = escapeRegExp(eid);
  const startRe = new RegExp(`\\{/\\*\\s*EDITABLE:${e}:start\\s*\\*/\\}`);
  const endRe = new RegExp(`\\{/\\*\\s*EDITABLE:${e}:end\\s*\\*/\\}`);
  const startMatch = startRe.exec(source);
  if (!startMatch) return null;
  const blockStart = startMatch.index + startMatch[0].length;
  const endMatch = endRe.exec(source.slice(blockStart));
  if (!endMatch) return null;
  return { start: blockStart, end: blockStart + endMatch.index };
}

function toJsxTextChildren(value: string): string {
  return value
    .split('\n')
    .map((line) => (line.length === 0 ? '' : `{${JSON.stringify(line)}}`))
    .join('<br />');
}

function replaceTextInBlock(block: string, value: string): string | null {
  const open = /<EditableText\b[^>]*>/.exec(block);
  if (!open) return null;
  const childrenStart = open.index + open[0].length;
  const closeIdx = block.indexOf('</EditableText>', childrenStart);
  if (closeIdx === -1) return null;

  const before = block.slice(0, childrenStart);
  const after = block.slice(closeIdx);
  return `${before}\n        ${toJsxTextChildren(value)}\n      ${after}`;
}

function replaceImageInBlock(block: string, value: string): string | null {
  const tagRe = /<EditableImage\b[^>]*?\bsrc=("[^"]*"|\{[^}]*\})/;
  const m = tagRe.exec(block);
  if (!m) return null;
  return block.replace(m[1], JSON.stringify(value));
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

  let body: { changes?: unknown; filePath?: unknown };
  try {
    body = (await req.json()) as { changes?: unknown; filePath?: unknown };
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const filePath = typeof body.filePath === 'string' ? body.filePath : '';
  const rawChanges = Array.isArray(body.changes) ? body.changes : [];
  const changes = rawChanges.map(normalizeChange);

  if (!isAllowedFile(filePath)) {
    return Response.json({ error: 'File is not editable' }, { status: 403 });
  }
  if (rawChanges.length === 0 || rawChanges.length > MAX_CHANGES) {
    return Response.json({ error: 'Invalid changes' }, { status: 400 });
  }
  if (changes.some((change) => change === null)) {
    return Response.json({ error: 'Invalid change payload' }, { status: 400 });
  }

  const octokit = new Octokit({ auth: token });

  try {
    const res = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: filePath,
      ref: BRANCH,
    });
    if (Array.isArray(res.data) || !('content' in res.data)) {
      return Response.json({ error: 'Unable to fetch file' }, { status: 502 });
    }

    const sha = res.data.sha;
    let content = Buffer.from(res.data.content, 'base64').toString('utf8');
    const failed: string[] = [];

    for (const change of changes as Change[]) {
      const blockRange = findBlock(content, change.eid);
      if (!blockRange) {
        failed.push(change.eid);
        continue;
      }

      const block = content.slice(blockRange.start, blockRange.end);
      const updated =
        change.type === 'text'
          ? replaceTextInBlock(block, change.value)
          : replaceImageInBlock(block, change.value);

      if (updated === null) {
        failed.push(change.eid);
        continue;
      }
      content = content.slice(0, blockRange.start) + updated + content.slice(blockRange.end);
    }

    if (failed.length === changes.length) {
      return Response.json({ error: `No editable blocks found: ${failed.join(', ')}` }, { status: 422 });
    }

    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: filePath,
      message: 'Visual editor: update content',
      content: Buffer.from(content, 'utf8').toString('base64'),
      sha,
      branch: BRANCH,
    });

    return Response.json({ ok: true, skipped: failed });
  } catch (e) {
    console.error('file update error', e);
    return Response.json({ error: 'Save failed' }, { status: 502 });
  }
}
