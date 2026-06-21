export type SlotKey = 'initial' | 'current' | 'draft';

export type SlotCommit = {
  sha: string;
  date: string;
  message: string;
};

export type SlotInfo = {
  key: SlotKey;
  label: string; // '初期HP' | '今のHP' | '前回の編集HP'
  branch: string; // 'initial-hp' | 'master' | 'draft-slot-1'
  locked: boolean; // true = 書き込み禁止（initial のみ）
  exists: boolean; // ブランチが存在するか（draft は存在しない場合あり）
  lastCommit: SlotCommit | null;
};

export type CurrentSlot = {
  key: SlotKey;
  branch: string; // 'master' | 'draft-slot-1'
} | null;

export const INITIAL_BRANCH = 'initial-hp';
export const MASTER_BRANCH = 'master';
export const DRAFT_BRANCH = 'draft-slot-1';

// 3枠の固定定義（順序: 初期HP → 今のHP → 前回の編集HP）
export const SLOT_DEFS: { key: SlotKey; label: string; branch: string; locked: boolean }[] = [
  { key: 'initial', label: '初期HP', branch: INITIAL_BRANCH, locked: true },
  { key: 'current', label: '今のHP', branch: MASTER_BRANCH, locked: false },
  { key: 'draft', label: '前回の編集HP', branch: DRAFT_BRANCH, locked: false },
];

export type CreateAction = 'create-draft' | 'create-initial';

export function isValidCreateAction(value: unknown): value is CreateAction {
  return value === 'create-draft' || value === 'create-initial';
}
