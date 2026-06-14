-- ジャングルパスポート セキュリティ対応で追加するテーブル
-- 共有Neon DBに対して一度だけ実行する（drizzle-kit未使用のため手動適用）。

-- 解約用ワンタイムコード（本人確認）
CREATE TABLE IF NOT EXISTS cancel_otps (
  email       TEXT PRIMARY KEY,
  code_hash   TEXT NOT NULL,
  expires_at  TIMESTAMP NOT NULL,
  attempts    INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMP DEFAULT now()
);

-- Stripe webhook のべき等性（同一イベントの二重処理防止）
CREATE TABLE IF NOT EXISTS webhook_events (
  event_id    TEXT PRIMARY KEY,
  created_at  TIMESTAMP DEFAULT now()
);

-- 固定ウィンドウのレートリミット（サーバーレス間で共有）
-- 共有DBに別用途の rate_limits が既存のため、衝突回避で専用名 passport_rate_limits を使う
CREATE TABLE IF NOT EXISTS passport_rate_limits (
  key           TEXT PRIMARY KEY,
  count         INTEGER NOT NULL DEFAULT 0,
  window_start  TIMESTAMP NOT NULL
);
