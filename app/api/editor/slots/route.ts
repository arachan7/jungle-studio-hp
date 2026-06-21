import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';
import { verifySameOrigin } from '@/lib/editorSecurity';
import {
  isValidSlot,
  slotBranch,
  SLOT_NUMBERS,
  type SlotInfo,
} from '@/lib/editorTypes';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';

export async function GET(req: Request) {
  if (!verifySessionFromRequest(req)) {
    return Response.json({ error: 'Authentication required' }, { status: 401 });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return Response.json({ error: 'GITHUB_TOKEN is not configured' }, { status: 500 });
  }

  const octokit = new Octokit({ auth: token });

  try {
    const slots: SlotInfo[] = await Promise.all(
      SLOT_NUMBERS.map(async (slot) => {
        try {
          const res = await octokit.repos.getBranch({
            owner: OWNER,
            repo: REPO,
            branch: slotBranch(slot),
          });
          const commit = res.data.commit;
          return {
            slot,
            exists: true,
            lastCommit: {
              sha: commit.sha,
              date:
                commit.commit.author?.date ??
                commit.commit.committer?.date ??
                '',
              message: (commit.commit.message ?? '').split('\n')[0],
            },
          };
        } catch (e) {
          if ((e as { status?: number }).status === 404) {
            return { slot, exists: false, lastCommit: null };
          }
          throw e;
        }
      }),
    );

    return Response.json(slots);
  } catch (e) {
    console.error('slots fetch error', e);
    return Response.json({ error: 'Failed to fetch slots' }, { status: 502 });
  }
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
    // master の最新コミット SHA を取得
    const ref = await octokit.git.getRef({
      owner: OWNER,
      repo: REPO,
      ref: 'heads/master',
    });
    const masterSha = ref.data.object.sha;

    // その SHA から下書きスロットのブランチを作成
    await octokit.git.createRef({
      owner: OWNER,
      repo: REPO,
      ref: `refs/heads/${slotBranch(slot)}`,
      sha: masterSha,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error('slot create error', e);
    return Response.json({ error: 'Failed to create slot' }, { status: 502 });
  }
}
