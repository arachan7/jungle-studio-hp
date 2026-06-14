/**
 * 環境変数を取得し、先頭・末尾のBOM(U+FEFF)・ゼロ幅空白(U+200B)・空白を除去する。
 * Vercelのenv値にBOMが混入していると、DB接続文字列やStripeキー
 * （HTTPヘッダに載る）が "Invalid character" / "not a valid URL" で失敗するため。
 */
export function cleanEnv(name: string): string {
  const raw = process.env[name];
  if (!raw) throw new Error(`${name} is required`);
  let s = raw.trim();
  while (s.length && (s.charCodeAt(0) === 0xfeff || s.charCodeAt(0) === 0x200b)) {
    s = s.slice(1);
  }
  while (s.length && (s.charCodeAt(s.length - 1) === 0xfeff || s.charCodeAt(s.length - 1) === 0x200b)) {
    s = s.slice(0, -1);
  }
  return s.trim();
}
