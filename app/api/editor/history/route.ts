import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';
const HISTORY_PATH = 'app/components/HomeContent.tsx';

type HistoryItem = {
  sha: string;
  message: string;
  date: string;
  type: 'initial' | 'editor';
  label: string;
};

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
    const res = await octokit.repos.listCommits({
      owner: OWNER,
      repo: REPO,
      path: HISTORY_PATH,
      per_page: 50,
    });

    const commits = res.data;
    if (!Array.isArray(commits) || commits.length === 0) {
      return Response.json([]);
    }

    const oldestIndex = commits.length - 1;
    const result: HistoryItem[] = [];
    let editorCount = 0;

    commits.forEach((commit, index) => {
      const fullMessage = commit.commit.message ?? '';
      const message = fullMessage.split('\n')[0];
      const date =
        commit.commit.author?.date ?? commit.commit.committer?.date ?? '';
      const isOldest = index === oldestIndex;

      if (isOldest) {
        result.push({
          sha: commit.sha,
          message,
          date,
          type: 'initial',
          label: '最初のHP',
        });
        return;
      }

      if (fullMessage.includes('ビジュアルエディタ')) {
        editorCount += 1;
        const label =
          editorCount === 1 ? '前回の編集' : `${editorCount}回前の編集`;
        result.push({
          sha: commit.sha,
          message,
          date,
          type: 'editor',
          label,
        });
      }
    });

    return Response.json(result.slice(0, 10));
  } catch (e) {
    console.error('history fetch error', e);
    return Response.json({ error: 'Failed to fetch history' }, { status: 502 });
  }
}
