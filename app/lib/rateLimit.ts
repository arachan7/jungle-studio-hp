import { neon } from '@neondatabase/serverless';

/**
 * DBベースの固定ウィンドウ・レートリミッタ。
 * Vercelのサーバーレス関数はインスタンス間でメモリを共有しないため、
 * 共有のNeon DB上でカウントを取る（1ステートメントでアトミックに加算）。
 *
 * @returns allowed=trueなら許可、falseなら上限超過
 */
export async function checkRateLimit(
  key: string,
  limit: number,
  windowSeconds: number,
): Promise<boolean> {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is required');
  const sql = neon(url);

  const rows = (await sql`
    INSERT INTO rate_limits (key, count, window_start)
    VALUES (${key}, 1, now())
    ON CONFLICT (key) DO UPDATE SET
      count = CASE
        WHEN rate_limits.window_start < now() - make_interval(secs => ${windowSeconds})
        THEN 1 ELSE rate_limits.count + 1 END,
      window_start = CASE
        WHEN rate_limits.window_start < now() - make_interval(secs => ${windowSeconds})
        THEN now() ELSE rate_limits.window_start END
    RETURNING count;
  `) as { count: number }[];

  const count = Number(rows[0]?.count ?? 0);
  return count <= limit;
}

/** Vercel環境でのクライアントIP取得（取得不能時は 'unknown'） */
export function getClientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}
