import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';
import { verifySameOrigin } from '@/lib/editorSecurity';
import { isValidSlot, slotBranch } from '@/lib/editorTypes';

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

  let body: { slot?: unknown };
  try {
    body = (await req.json()) as { slot?: unknown };
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!isValidSlot(body.slot)) {
    return Response.json({ error: 'Invalid slot' }, { status: 400 });
  }
  const slot = body.slot;

  const octokit = new Octokit({ auth: token });

  try {
    await octokit.repos.merge({
      owner: OWNER,
      repo: REPO,
      base: 'master',
      head: slotBranch(slot),
      commit_message: `ビジュアルエディタ: スロット${slot}を公開`,
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
