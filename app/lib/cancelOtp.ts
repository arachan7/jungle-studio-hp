import { createHash, randomInt, timingSafeEqual } from 'crypto';
import { neon } from '@neondatabase/serverless';
import { getDbUrl } from './db';

const OTP_TTL_SECONDS = 10 * 60; // 10分で失効
const MAX_ATTEMPTS = 5; // コード入力の試行上限

function getSql() {
  return neon(getDbUrl());
}

/** コードをDB漏洩対策のペッパー付きでハッシュ化（平文は保存しない） */
function hashCode(code: string): string {
  const pepper = process.env.CANCEL_OTP_SECRET;
  if (!pepper) {
    throw new Error('CANCEL_OTP_SECRET is required');
  }
  return createHash('sha256').update(`${pepper}:${code}`).digest('hex');
}

/** 6桁のワンタイムコードを生成し、email ごとに1件で上書き保存する */
export async function issueOtp(email: string): Promise<string> {
  const code = String(randomInt(0, 1_000_000)).padStart(6, '0');
  const codeHash = hashCode(code);
  const sql = getSql();
  await sql`
    INSERT INTO cancel_otps (email, code_hash, expires_at, attempts, created_at)
    VALUES (${email}, ${codeHash}, now() + make_interval(secs => ${OTP_TTL_SECONDS}::int), 0, now())
    ON CONFLICT (email) DO UPDATE SET
      code_hash = ${codeHash},
      expires_at = now() + make_interval(secs => ${OTP_TTL_SECONDS}::int),
      attempts = 0,
      created_at = now();
  `;
  return code;
}

/**
 * コードを検証する。試行回数を加算し、上限超過・期限切れ・不一致は false。
 * consume=true のときは検証成功時にコードを無効化（解約確定時に使用）。
 */
export async function verifyOtp(
  email: string,
  code: string,
  consume: boolean,
): Promise<boolean> {
  const sql = getSql();

  // 試行回数を原子的に加算しつつ、有効なレコードを取得
  const rows = (await sql`
    UPDATE cancel_otps
    SET attempts = attempts + 1
    WHERE email = ${email}
      AND expires_at > now()
      AND attempts < ${MAX_ATTEMPTS}
    RETURNING code_hash;
  `) as { code_hash: string }[];

  if (rows.length === 0) return false;

  const expected = Buffer.from(rows[0].code_hash, 'hex');
  const actual = Buffer.from(hashCode(code), 'hex');
  const ok = expected.length === actual.length && timingSafeEqual(expected, actual);

  if (ok && consume) {
    await sql`DELETE FROM cancel_otps WHERE email = ${email};`;
  }
  return ok;
}
