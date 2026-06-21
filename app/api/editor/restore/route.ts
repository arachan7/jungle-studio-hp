import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';
import { verifySameOrigin } from '@/lib/editorSecurity';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';
const BRANCH = 'master';

const RESTORE_FILES = [
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
  'components/Header.tsx',
];

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

  let body: { sha?: unknown };
  try {
    body = (await req.json()) as { sha?: unknown };
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const sha = typeof body.sha === 'string' ? body.sha : '';
  if (!/^[0-9a-f]{7,40}$/.test(sha)) {
    return Response.json({ error: 'Invalid sha' }, { status: 400 });
  }

  const octokit = new Octokit({ auth: token });

  try {
    let restored = 0;

    for (const path of RESTORE_FILES) {
      // 1. 指定sha時点の内容を取得
      let content: string;
      try {
        const atSha = await octokit.repos.getContent({
          owner: OWNER,
          repo: REPO,
          path,
          ref: sha,
        });
        if (Array.isArray(atSha.data) || !('content' in atSha.data)) {
          continue;
        }
        const text = Buffer.from(atSha.data.content, 'base64').toString('utf8');
        content = Buffer.from(text, 'utf8').toString('base64');
      } catch (e) {
        if ((e as { status?: number }).status === 404) continue;
        throw e;
      }

      // 2. 現在のHEAD時点のblob shaを取得（無ければ新規作成）
      let currentSha: string | undefined;
      try {
        const atHead = await octokit.repos.getContent({
          owner: OWNER,
          repo: REPO,
          path,
          ref: BRANCH,
        });
        if (!Array.isArray(atHead.data) && 'sha' in atHead.data) {
          currentSha = atHead.data.sha;
        }
      } catch (e) {
        if ((e as { status?: number }).status !== 404) throw e;
      }

      // 3. 上書き
      await octokit.repos.createOrUpdateFileContents({
        owner: OWNER,
        repo: REPO,
        path,
        message: `バックアップ復元: ${sha.slice(0, 7)} 時点に戻す`,
        content,
        sha: currentSha,
        branch: BRANCH,
      });

      restored += 1;
    }

    return Response.json({ ok: true, restored });
  } catch (e) {
    console.error('restore error', e);
    return Response.json({ error: 'Restore failed' }, { status: 502 });
  }
}
