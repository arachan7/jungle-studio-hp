import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

/**
 * DATABASE_URL を取得し、先頭・末尾のBOM(U+FEFF)・ゼロ幅空白(U+200B)・空白を除去して返す。
 * 環境変数の値にBOMが混入していると neon() が "not a valid URL" で失敗するため。
 */
export function getDbUrl(): string {
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error('DATABASE_URL is required');
  let s = raw.trim();
  while (s.length && (s.charCodeAt(0) === 0xfeff || s.charCodeAt(0) === 0x200b)) {
    s = s.slice(1);
  }
  while (s.length && (s.charCodeAt(s.length - 1) === 0xfeff || s.charCodeAt(s.length - 1) === 0x200b)) {
    s = s.slice(0, -1);
  }
  return s.trim();
}

export function getDb() {
  return drizzle(neon(getDbUrl()));
}
