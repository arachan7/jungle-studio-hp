import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';
import { verifySameOrigin } from '@/lib/editorSecurity';
import {
  DRAFT_BRANCH,
  INITIAL_BRANCH,
  isValidCreateAction,
  MASTER_BRANCH,
  SLOT_DEFS,
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
      SLOT_DEFS.map(async (def) => {
        try {
          const res = await octokit.repos.getBranch({
            owner: OWNER,
            repo: REPO,
            branch: def.branch,
          });
          const commit = res.data.commit;
          return {
            key: def.key,
            label: def.label,
            branch: def.branch,
            locked: def.locked,
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
            return {
              key: def.key,
              label: def.label,
              branch: def.branch,
              locked: def.locked,
              exists: false,
              lastCommit: null,
            };
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

  let body: { action?: unknown };
  try {
    body = (await req.json()) as { action?: unknown };
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!isValidCreateAction(body.action)) {
    return Response.json({ error: 'Invalid action' }, { status: 400 });
  }
  const targetBranch = body.action === 'create-initial' ? INITIAL_BRANCH : DRAFT_BRANCH;

  const octokit = new Octokit({ auth: token });

  try {
    // 既に存在する場合は弾く
    try {
      await octokit.repos.getBranch({
        owner: OWNER,
        repo: REPO,
        branch: targetBranch,
      });
      return Response.json({ error: 'already exists' }, { status: 409 });
    } catch (e) {
      if ((e as { status?: number }).status !== 404) throw e;
    }

    // master の最新コミット SHA を取得
    const ref = await octokit.git.getRef({
      owner: OWNER,
      repo: REPO,
      ref: `heads/${MASTER_BRANCH}`,
    });
    const masterSha = ref.data.object.sha;

    // その SHA からブランチを作成
    await octokit.git.createRef({
      owner: OWNER,
      repo: REPO,
      ref: `refs/heads/${targetBranch}`,
      sha: masterSha,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error('slot create error', e);
    return Response.json({ error: 'Failed to create branch' }, { status: 502 });
  }
}
