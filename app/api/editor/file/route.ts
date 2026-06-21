import { Octokit } from '@octokit/rest';
import { verifySessionFromRequest } from '@/lib/editorAuth';

const OWNER = 'arachan7';
const REPO = 'jungle-studio-hp';
const BRANCH = 'master';

// 編集を許可するファイルのホワイトリスト
const ALLOWED_FILES = new Set<string>([
  'app/components/HomeContent.tsx',
  'app/page.tsx',
  'app/faq/page.tsx',
  'app/flow/page.tsx',
  'app/tips/page.tsx',
]);

// app/column/*/page.tsx を許可
function isAllowedFile(filePath: string): boolean {
  if (ALLOWED_FILES.has(filePath)) return true;
  if (/^app\/column\/[a-z0-9-]+\/page\.tsx$/.test(filePath)) return true;
  return false;
}

type Change = { eid: string; type: 'text' | 'image'; value: string };

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * {/* EDITABLE:eid:start *​/} ... {/* EDITABLE:eid:end *​/} の範囲を取得する。
 * 戻り値は [マーカー間本文の開始index, 終了index]（マーカー自身は含まない）。
 */
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
  const blockEnd = blockStart + endMatch.index;
  return { start: blockStart, end: blockEnd };
}

/**
 * テキスト値を JSX の文字列リテラル children として安全な形へ変換する。
 * 改行は {'\n'} 表現ではなく、JSX 式コンテナで安全に埋め込む。
 * 中括弧・タグ等の特殊文字は JSX 式 {"..."} に包んでエスケープする。
 */
function toJsxTextChildren(value: string): string {
  // innerText 由来の改行を <br /> に変換しつつ、各テキスト断片は {"..."} で安全に包む。
  const lines = value.split('\n');
  const parts = lines.map((line) => {
    if (line.length === 0) return '';
    const escaped = line.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `{"${escaped}"}`;
  });
  return parts.join('<br />');
}

/**
 * EditableText の children（マーカー間）を置換する。
 * <EditableText ...> と </EditableText> の間を新しいテキストに差し替える。
 */
function replaceTextInBlock(block: string, value: string): string | null {
  const openRe = /<EditableText\b[^>]*>/;
  const open = openRe.exec(block);
  if (!open) return null;
  const childrenStart = open.index + open[0].length;
  const closeIdx = block.indexOf('</EditableText>', childrenStart);
  if (closeIdx === -1) return null;

  const before = block.slice(0, childrenStart);
  const after = block.slice(closeIdx);
  const newChildren = `\n        ${toJsxTextChildren(value)}\n      `;
  return before + newChildren + after;
}

/**
 * EditableImage の src="..." を置換する。
 */
function replaceImageInBlock(block: string, value: string): string | null {
  const tagRe = /<EditableImage\b[^>]*?\bsrc=("[^"]*"|\{[^}]*\})/;
  const m = tagRe.exec(block);
  if (!m) return null;
  const srcAttr = m[1];
  const newSrc = `"${value}"`;
  const replaced = block.replace(srcAttr, newSrc);
  return replaced;
}

export async function POST(req: Request) {
  if (!verifySessionFromRequest(req)) {
    return Response.json({ error: '認証が必要です' }, { status: 401 });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return Response.json({ error: 'GITHUB_TOKEN が未設定です' }, { status: 500 });
  }

  let body: { changes?: Change[]; filePath?: string };
  try {
    body = (await req.json()) as { changes?: Change[]; filePath?: string };
  } catch {
    return Response.json({ error: '不正なリクエストです' }, { status: 400 });
  }

  const filePath = body.filePath ?? '';
  const changes = Array.isArray(body.changes) ? body.changes : [];

  if (!isAllowedFile(filePath)) {
    return Response.json({ error: '許可されていないファイルです' }, { status: 403 });
  }
  if (changes.length === 0) {
    return Response.json({ error: '変更がありません' }, { status: 400 });
  }

  const octokit = new Octokit({ auth: token });

  try {
    // 現在のファイル内容と sha を取得
    const res = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: filePath,
      ref: BRANCH,
    });
    if (Array.isArray(res.data) || !('content' in res.data)) {
      return Response.json({ error: 'ファイルを取得できませんでした' }, { status: 502 });
    }
    const sha = res.data.sha;
    let content = Buffer.from(res.data.content, 'base64').toString('utf8');

    const failed: string[] = [];

    for (const change of changes) {
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
      content =
        content.slice(0, blockRange.start) + updated + content.slice(blockRange.end);
    }

    if (failed.length === changes.length) {
      return Response.json(
        { error: `更新対象が見つかりませんでした: ${failed.join(', ')}` },
        { status: 422 },
      );
    }

    const newBase64 = Buffer.from(content, 'utf8').toString('base64');
    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: filePath,
      message: 'ビジュアルエディタ: コンテンツ更新',
      content: newBase64,
      sha,
      branch: BRANCH,
    });

    return Response.json({ ok: true, skipped: failed });
  } catch (e) {
    console.error('file update error', e);
    return Response.json({ error: '保存に失敗しました' }, { status: 502 });
  }
}
