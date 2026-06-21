export function verifySameOrigin(req: Request): boolean {
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (!origin || !host) return false;

  try {
    const url = new URL(origin);
    return url.host === host && (url.protocol === 'https:' || host.startsWith('localhost:'));
  } catch {
    return false;
  }
}

export function getClientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip')?.trim() || 'unknown';
}
