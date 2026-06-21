import crypto from 'crypto';

const COOKIE_NAME = '__editor_session';
const TOKEN_TTL_MS = 8 * 60 * 60 * 1000; // 8時間

function getSecret(): string {
  const secret = process.env.EDITOR_SECRET;
  if (!secret) {
    throw new Error('EDITOR_SECRET が設定されていません');
  }
  return secret;
}

function base64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function base64urlToBuffer(input: string): Buffer {
  const padded = input.replace(/-/g, '+').replace(/_/g, '/');
  return Buffer.from(padded, 'base64');
}

function sign(payload: string): string {
  return base64url(
    crypto.createHmac('sha256', getSecret()).update(payload).digest(),
  );
}

/**
 * 署名付きセッショントークンを生成する。
 * 形式: base64url(JSON({exp})) + "." + base64url(hmac)
 */
export function generateToken(): string {
  const payload = base64url(JSON.stringify({ exp: Date.now() + TOKEN_TTL_MS }));
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

/**
 * Cookie 値（トークン）を検証する。
 * 署名が正しく、かつ有効期限内なら true。
 */
export function verifySession(cookieValue: string): boolean {
  if (!cookieValue) return false;
  if (!process.env.EDITOR_SECRET) return false;

  const parts = cookieValue.split('.');
  if (parts.length !== 2) return false;

  const [payload, signature] = parts;

  // 署名検証（timing-safe）
  const expected = sign(payload);
  const sigBuf = base64urlToBuffer(signature);
  const expBuf = base64urlToBuffer(expected);
  if (sigBuf.length !== expBuf.length) return false;
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return false;

  // 有効期限検証
  try {
    const decoded = JSON.parse(base64urlToBuffer(payload).toString('utf8')) as {
      exp?: number;
    };
    if (typeof decoded.exp !== 'number') return false;
    if (Date.now() > decoded.exp) return false;
    return true;
  } catch {
    return false;
  }
}

export const EDITOR_COOKIE_NAME = COOKIE_NAME;

/**
 * Request の Cookie ヘッダから __editor_session を読んで検証する。
 * Route Handler 共通のセッション検証ヘルパー。
 */
export function verifySessionFromRequest(req: Request): boolean {
  const cookieHeader = req.headers.get('cookie') ?? '';
  const value = parseCookie(cookieHeader, COOKIE_NAME);
  return verifySession(value);
}

function parseCookie(cookieHeader: string, name: string): string {
  const target = `${name}=`;
  const segments = cookieHeader.split(';');
  for (const seg of segments) {
    const trimmed = seg.trim();
    if (trimmed.startsWith(target)) {
      return decodeURIComponent(trimmed.slice(target.length));
    }
  }
  return '';
}
