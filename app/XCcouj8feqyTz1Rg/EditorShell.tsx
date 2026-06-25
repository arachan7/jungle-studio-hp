'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { CurrentSlot, SlotInfo, SlotKey } from '@/lib/editorTypes';

type Change = { type: 'text' | 'image' | 'link'; value: string };

type Stage = 'login' | 'slot-select' | 'editing';

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

// 日時フォーマット（共通）
function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export default function EditorShell({ isAuthed }: { isAuthed: boolean }) {
  const [stage, setStage] = useState<Stage>(isAuthed ? 'slot-select' : 'login');
  const [currentSlot, setCurrentSlot] = useState<CurrentSlot>(null);

  if (stage === 'login') {
    return <LoginForm onLogin={() => setStage('slot-select')} />;
  }
  if (stage === 'slot-select') {
    return (
      <SlotSelect
        onEdit={(slot) => {
          setCurrentSlot(slot);
          setStage('editing');
        }}
      />
    );
  }
  return <Editor currentSlot={currentSlot} onBack={() => setStage('slot-select')} />;
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
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
        onLogin();
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
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-white rounded-3xl shadow-2xl shadow-slate-300/50 p-8 flex flex-col gap-5 ring-1 ring-slate-100"
      >
        <div className="text-center">
          <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center ring-4 ring-emerald-100 text-4xl">
            🐨
          </div>
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">編集コアラ</h1>
          <p className="text-xs text-slate-500 mt-1.5 font-medium">パスワードを入力してください</p>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          placeholder="パスワード"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-colors"
        />
        {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 text-sm font-extrabold shadow-lg shadow-emerald-600/20 transition-colors disabled:opacity-50 disabled:shadow-none"
        >
          {loading ? '確認中...' : 'ログイン'}
        </button>
      </form>
    </div>
  );
}

function findSlot(slots: SlotInfo[] | null, key: SlotKey): SlotInfo | undefined {
  return slots?.find((s) => s.key === key);
}

function SlotSelect({
  onEdit,
}: {
  onEdit: (slot: { key: SlotKey; branch: string }) => void;
}) {
  const [slots, setSlots] = useState<SlotInfo[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }, []);

  const loadSlots = useCallback(() => {
    fetch('/api/editor/slots')
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setSlots(Array.isArray(d) ? (d as SlotInfo[]) : []))
      .catch(() => setSlots([]));
  }, []);

  useEffect(() => {
    loadSlots();
  }, [loadSlots]);

  // 初期HBの「この状態に戻す」
  const restoreFromInitial = async () => {
    const ok = window.confirm(
      '初期HP（最初の状態）に戻します。現在の公開中HPは上書きされます。よろしいですか？',
    );
    if (!ok) return;
    setBusy(true);
    try {
      const res = await fetch('/api/editor/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromBranch: 'initial-hp' }),
      });
      if (res.ok) {
        showToast('初期HPに戻しました。数分後に本番へ反映されます');
      } else {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        showToast(d.error ?? '復元に失敗しました');
      }
    } catch {
      showToast('通信エラーが発生しました');
    } finally {
      setBusy(false);
    }
  };

  // 初期HPとして保存（初回セットアップ）
  const createInitial = async () => {
    const ok = window.confirm(
      '現在の公開中HPを初期HPとして保存します。一度保存すると変更できません。',
    );
    if (!ok) return;
    setBusy(true);
    try {
      const res = await fetch('/api/editor/slots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'create-initial' }),
      });
      if (res.ok) {
        showToast('初期HPとして保存しました');
        loadSlots();
      } else {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        showToast(d.error ?? '保存に失敗しました');
      }
    } catch {
      showToast('通信エラーが発生しました');
    } finally {
      setBusy(false);
    }
  };

  // 前回の編集HPを新規作成
  const createDraft = async () => {
    const ok = window.confirm(
      '今のHPの内容をコピーして「前回の編集HP（下書き）」を新規作成します。よろしいですか？',
    );
    if (!ok) return;
    setBusy(true);
    try {
      const res = await fetch('/api/editor/slots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'create-draft' }),
      });
      if (res.ok) {
        showToast('前回の編集HPを作成しました');
        loadSlots();
      } else {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        showToast(d.error ?? '作成に失敗しました');
      }
    } catch {
      showToast('通信エラーが発生しました');
    } finally {
      setBusy(false);
    }
  };

  // 前回の編集HPを公開
  const publishDraft = async () => {
    const ok = window.confirm(
      '前回の編集HPの内容を「今のHP（本番）」に公開します。よろしいですか？',
    );
    if (!ok) return;
    setBusy(true);
    try {
      const res = await fetch('/api/editor/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      if (res.ok) {
        showToast('公開しました。数分後に本番へ反映されます');
      } else {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        showToast(d.error ?? '公開に失敗しました');
      }
    } catch {
      showToast('通信エラーが発生しました');
    } finally {
      setBusy(false);
    }
  };

  const initial = findSlot(slots, 'initial');
  const current = findSlot(slots, 'current');
  const draft = findSlot(slots, 'draft');

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-slate-100 to-slate-200 flex items-start justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-md my-8 flex flex-col gap-5">
        <div className="flex flex-col items-center text-center bg-white rounded-3xl shadow-lg shadow-slate-300/40 ring-1 ring-slate-100 px-6 py-6">
          <div className="mb-2 w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center ring-4 ring-emerald-100 text-4xl">
            🐨
          </div>
          <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">編集コアラ</h1>
          <p className="text-xs text-emerald-600 mt-1 font-bold">ホームページかんたん編集ツール</p>
        </div>

        {slots === null && (
          <p className="text-slate-400 text-sm py-8 text-center font-medium">読み込み中...</p>
        )}

        {slots !== null && (
          <div className="flex flex-col gap-4">
            {/* 🔒 初期HP */}
            <div className="bg-white border border-slate-300 rounded-3xl p-5 shadow-sm shadow-slate-200/60">
              <p className="text-sm font-extrabold text-slate-800 mb-1">🔒 初期HP（変更不可）</p>
              {initial?.exists ? (
                <>
                  <p className="text-xs text-slate-500 mb-3 font-medium">
                    最初の状態（絶対に変更されません）
                  </p>
                  <button
                    onClick={restoreFromInitial}
                    disabled={busy}
                    className="bg-slate-700 hover:bg-slate-800 text-white text-sm font-extrabold rounded-xl px-4 py-2 transition-colors disabled:opacity-50"
                  >
                    この状態に戻す
                  </button>
                </>
              ) : (
                <>
                  <p className="text-xs text-slate-500 mb-3 font-medium">
                    まだ初期HPが保存されていません。現在の公開中HPを初期HPとして保存できます。
                  </p>
                  <button
                    onClick={createInitial}
                    disabled={busy}
                    className="bg-slate-700 hover:bg-slate-800 text-white text-sm font-extrabold rounded-xl px-4 py-2 transition-colors disabled:opacity-50"
                  >
                    初期HPとして保存
                  </button>
                </>
              )}
            </div>

            {/* 📢 今のHP */}
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-5 shadow-sm shadow-emerald-200/50">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-extrabold text-slate-800">📢 今のHP</p>
                <span className="text-[10px] font-extrabold bg-emerald-600 text-white rounded-full px-2.5 py-0.5 shadow-sm shadow-emerald-600/30">
                  公開中
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3 font-medium">
                最終更新:{' '}
                {current?.lastCommit && formatDate(current.lastCommit.date)
                  ? formatDate(current.lastCommit.date)
                  : '不明'}
              </p>
              <button
                onClick={() => onEdit({ key: 'current', branch: 'master' })}
                disabled={busy}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold rounded-xl px-4 py-2 shadow-lg shadow-emerald-600/20 transition-colors disabled:opacity-50 disabled:shadow-none"
              >
                今のHPを編集する
              </button>
            </div>

            {/* ✏️ 前回の編集HP */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm shadow-slate-200/60">
              <p className="text-sm font-extrabold text-slate-800 mb-1">✏️ 前回の編集HP</p>
              {draft?.exists ? (
                <>
                  <p className="text-xs text-slate-500 mb-3 font-medium">
                    最終編集:{' '}
                    {draft.lastCommit && formatDate(draft.lastCommit.date)
                      ? formatDate(draft.lastCommit.date)
                      : '不明'}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit({ key: 'draft', branch: 'draft-slot-1' })}
                      disabled={busy}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl py-2 text-sm font-extrabold transition-colors disabled:opacity-50"
                    >
                      編集する
                    </button>
                    <button
                      onClick={publishDraft}
                      disabled={busy}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2 text-sm font-extrabold shadow-lg shadow-emerald-600/20 transition-colors disabled:opacity-50 disabled:shadow-none"
                    >
                      公開する→
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs text-slate-400 mb-3 font-medium">
                    下書きがまだありません。今のHPをコピーして編集を始められます。
                  </p>
                  <button
                    onClick={createDraft}
                    disabled={busy}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2 text-sm font-extrabold shadow-lg shadow-emerald-600/20 transition-colors disabled:opacity-50 disabled:shadow-none"
                  >
                    新規作成
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-sm font-medium px-5 py-3 rounded-full shadow-xl z-[10000]">
          {toast}
        </div>
      )}
    </div>
  );
}

function Editor({
  currentSlot,
  onBack,
}: {
  currentSlot: CurrentSlot;
  onBack: () => void;
}) {
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

  const back = () => {
    if (pending.size > 0) {
      const ok = window.confirm(
        '保存していない変更があります。選択画面に戻ると失われます。続けますか？',
      );
      if (!ok) return;
    }
    onBack();
  };

  // 編集対象ブランチ。master / draft-slot-1 のいずれか。
  const targetBranch = currentSlot?.branch ?? 'master';
  const isDraft = currentSlot?.key === 'draft';
  const previewPath = `${currentPath}?editorBranch=${encodeURIComponent(targetBranch)}`;

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
          body: JSON.stringify({
            changes,
            filePath,
            branch: targetBranch,
          }),
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
        const dest = isDraft
          ? '前回の編集HPに保存しました'
          : '保存しました。数分後に本番へ反映されます';
        if (skipped.length > 0) {
          showToast(`保存しました（未対応: ${skipped.join(', ')}）`);
        } else {
          showToast(dest);
        }
      }
    } catch {
      showToast('通信エラーが発生しました');
    } finally {
      setSaving(false);
    }
  };

  const fileSupported = useMemo(() => currentFile !== '', [currentFile]);

  const slotLabel = isDraft ? '前回の編集HPを編集中' : '今のHPを編集中';

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
      <div className="h-12 bg-slate-800 text-white flex items-center gap-3 px-4 shrink-0 shadow-md shadow-slate-900/20">
        <span className="font-extrabold text-sm whitespace-nowrap">🐨 編集コアラ</span>
        <span className="text-xs font-bold bg-slate-700 rounded-full px-2.5 py-0.5 whitespace-nowrap">
          {slotLabel}
        </span>
        <button
          onClick={back}
          className="text-xs font-bold border border-slate-600 hover:bg-slate-700 rounded-full px-2.5 py-1 whitespace-nowrap transition-colors"
        >
          ←選択に戻る
        </button>
        <select
          value={pageIndex}
          onChange={(e) => changePage(Number(e.target.value))}
          className="bg-slate-700 text-white text-sm font-medium rounded-lg px-2 py-1 border border-slate-600 max-w-[30%]"
        >
          {PAGES.map((p, i) => (
            <option key={`${p.label}-${i}`} value={i}>
              {p.label}
            </option>
          ))}
        </select>
        <div className="flex-1" />
        {pending.size > 0 && (
          <span className="text-xs font-bold text-emerald-300">未保存: {pending.size}件</span>
        )}
        <button
          onClick={save}
          disabled={pending.size === 0 || saving}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-extrabold rounded-full px-4 py-1.5 shadow-sm shadow-emerald-500/30 disabled:opacity-40 disabled:shadow-none whitespace-nowrap transition-colors"
        >
          {saving ? '保存中...' : '保存'}
        </button>
      </div>

      {!fileSupported && (
        <div className="bg-emerald-50 text-emerald-800 text-xs font-medium px-4 py-2 border-b border-emerald-200 shrink-0">
          このページはまだ編集マーカーが未設定のため、表示のみ可能です（トップページが編集対応済みです）。
        </div>
      )}

      <iframe
        key={iframeKey}
        src={previewPath}
        className="flex-1 w-full border-0"
        title="ページプレビュー"
      />

      {toast && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-sm font-medium px-5 py-3 rounded-full shadow-xl z-[10000]">
          {toast}
        </div>
      )}
    </div>
  );
}
