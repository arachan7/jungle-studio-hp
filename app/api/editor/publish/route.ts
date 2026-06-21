import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';
import { verifySameOrigin } from '@/lib/editorSecurity';
import { DRAFT_BRANCH, MASTER_BRANCH } from '@/lib/editorTypes';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';

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

  const octokit = new Octokit({ auth: token });

  try {
    await octokit.repos.merge({
      owner: OWNER,
      repo: REPO,
      base: MASTER_BRANCH,
      head: DRAFT_BRANCH,
      commit_message: 'ビジュアルエディタ: 前回の編集HPを公開',
    });

    return Response.json({ ok: true });
  } catch (e) {
    const status = (e as { status?: number }).status;
    // 204: すでに最新（Already up-to-date）は成功扱い
    if (status === 204) {
      return Response.json({ ok: true });
    }
    // 409: マージコンフリクト
    if (status === 409) {
      return Response.json(
        { error: '競合が発生しました。サポートにお問い合わせください。' },
        { status: 409 },
      );
    }
    console.error('publish error', e);
    return Response.json({ error: 'Publish failed' }, { status: 502 });
  }
}
