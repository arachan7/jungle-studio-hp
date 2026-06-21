'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type Change = { type: 'text' | 'image' | 'link'; value: string };

const HEADER_FILE = 'components/Header.tsx';

// 編集対象ページ（表示パス → TSXファイルパス）
const PAGES: { label: string; path: string; file: string }[] = [
  { label: 'ヘッダー（共通）', path: '/', file: HEADER_FILE },
  { label: 'トップ', path: '/', file: 'app/components/HomeContent.tsx' },
  { label: 'FAQ', path: '/faq', file: 'app/faq/FaqContent.tsx' },
  { label: 'ご利用の流れ', path: '/flow', file: 'app/flow/FlowContent.tsx' },
  { label: ' 撮影のコツ', path: '/tips', file: 'app/tips/TipsContent.tsx' },
  { label: 'コラム: 七五三', path: '/column/shichigosan', file: 'app/column/shichigosan/ColumnContent.tsx' },
  { label: 'コラム: ハーフバースデー', path: '/column/half-birthday', file: 'app/column/half-birthday/ColumnContent.tsx' },
  { label: 'コラム: お宮参り', path: '/column/omiyamairi', file: 'app/column/omiyamairi/ColumnContent.tsx' },
  { label: 'コラム: バースデー', path: '/column/birthday', file: 'app/column/birthday/ColumnContent.tsx' },
  { label: 'コラム: 卒入学', path: '/column/nyuugaku', file: 'app/column/nyuugaku/ColumnContent.tsx' },
  { label: 'コラム: マタニティ', path: '/column/maternity', file: 'app/column/maternity/ColumnContent.tsx' },
  { label: 'コラム: ニューボーン', path: '/column/newborn', file: 'app/column/newborn/ColumnContent.tsx' },
  { label: 'ニュース: グランドオープン', path: '/news/grand-open', file: 'app/news/grand-open/NewsContent.tsx' },
];

// eid から保存先ファイルを決定する。
// header-* の eid はどのページで編集してもヘッダーファイルに保存する。
function fileForEid(eid: string, pageFile: string): string {
  if (eid.startsWith('header-')) return HEADER_FILE;
  return pageFile;
}

export default function EditorShell({ isAuthed }: { isAuthed: boolean }) {
  if (!isAuthed) return <LoginForm />;
  return <Editor />;
}

function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/editor/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        window.location.reload();
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(data.error ?? 'ログインに失敗しました');
    } catch {
      setError('通信エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-stone-100 flex items-center justify-center p-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-5"
      >
        <div className="text-center">
          <p className="text-2xl mb-1">🌿</p>
          <h1 className="text-lg font-bold text-stone-800">ビジュアルエディタ</h1>
          <p className="text-xs text-stone-500 mt-1">パスワードを入力してください</p>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          placeholder="パスワード"
          className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-stone-900 text-white rounded-lg py-3 text-sm font-bold disabled:opacity-50"
        >
          {loading ? '確認中...' : 'ログイン'}
        </button>
      </form>
    </div>
  );
}

function Editor() {
  const [pageIndex, setPageIndex] = useState(0);
  const [pending, setPending] = useState<Map<string, Change>>(new Map());
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [iframeKey, setIframeKey] = useState(0);

  const currentPage = PAGES[pageIndex] ?? PAGES[0];
  const currentPath = currentPage.path;
  const currentFile = currentPage.file;

  // iframe からの変更通知を受信
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const data = e.data;
      if (!data || data.type !== 'eid-change') return;
      const { eid, changeType, value } = data as {
        eid: string;
        changeType: 'text' | 'image' | 'link';
        value: string;
      };
      setPending((prev) => {
        const next = new Map(prev);
        next.set(eid, { type: changeType, value });
        return next;
      });
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }, []);

  const changePage = (idx: number) => {
    if (pending.size > 0) {
      const ok = window.confirm(
        '保存していない変更があります。ページを切り替えると失われます。続けますか？',
      );
      if (!ok) return;
    }
    setPending(new Map());
    setPageIndex(idx);
    setIframeKey((k) => k + 1);
  };

  const save = async () => {
    if (pending.size === 0) return;
    setSaving(true);
    try {
      // eid ごとに保存先ファイルを振り分け、ファイル単位でまとめて保存する
      const byFile = new Map<string, { eid: string; type: Change['type']; value: string }[]>();
      for (const [eid, c] of pending.entries()) {
        const file = fileForEid(eid, currentFile);
        const list = byFile.get(file) ?? [];
        list.push({ eid, type: c.type, value: c.value });
        byFile.set(file, list);
      }

      const skipped: string[] = [];
      let anyError = '';
      for (const [filePath, changes] of byFile.entries()) {
        const res = await fetch('/api/editor/file', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ changes, filePath }),
        });
        if (res.ok) {
          const data = (await res.json()) as { skipped?: string[] };
          if (data.skipped) skipped.push(...data.skipped);
        } else {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          anyError = data.error ?? '保存に失敗しました';
        }
      }

      if (anyError) {
        showToast(anyError);
      } else {
        setPending(new Map());
        if (skipped.length > 0) {
          showToast(`保存しました（未対応: ${skipped.join(', ')}）`);
        } else {
          showToast('保存しました。数分後に本番へ反映されます');
        }
      }
    } catch {
      showToast('通信エラーが発生しました');
    } finally {
      setSaving(false);
    }
  };

  const fileSupported = useMemo(() => currentFile !== '', [currentFile]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
      <div className="h-12 bg-stone-900 text-white flex items-center gap-4 px-4 shrink-0">
        <span className="font-bold text-sm whitespace-nowrap">🌿 ビジュアルエディタ</span>
        <select
          value={pageIndex}
          onChange={(e) => changePage(Number(e.target.value))}
          className="bg-stone-800 text-white text-sm rounded px-2 py-1 border border-stone-700 max-w-[40%]"
        >
          {PAGES.map((p, i) => (
            <option key={`${p.label}-${i}`} value={i}>
              {p.label}
            </option>
          ))}
        </select>
        <div className="flex-1" />
        {pending.size > 0 && (
          <span className="text-xs text-amber-300">未保存: {pending.size}件</span>
        )}
        <button
          onClick={save}
          disabled={pending.size === 0 || saving}
          className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded px-4 py-1.5 disabled:opacity-40 whitespace-nowrap"
        >
          {saving ? '保存中...' : '保存'}
        </button>
      </div>

      {!fileSupported && (
        <div className="bg-amber-50 text-amber-800 text-xs px-4 py-2 border-b border-amber-200 shrink-0">
          このページはまだ編集マーカーが未設定のため、表示のみ可能です（トップページが編集対応済みです）。
        </div>
      )}

      <iframe
        key={iframeKey}
        src={currentPath}
        className="flex-1 w-full border-0"
        title="ページプレビュー"
      />

      {toast && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-sm px-5 py-3 rounded-full shadow-lg z-[10000]">
          {toast}
        </div>
      )}
    </div>
  );
}
