export const MAX_LINK_TEXT_LENGTH = 200;
export const MAX_LINK_HREF_LENGTH = 2048;

const ALLOWED_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);

export function isSafeEditableHref(href: string): boolean {
  if (!href || href.length > MAX_LINK_HREF_LENGTH) return false;
  if (/[\u0000-\u001f\u007f\s]/.test(href)) return false;

  if (href.startsWith('/')) {
    return !href.startsWith('//') && !href.startsWith('/\\');
  }

  try {
    const url = new URL(href);
    return ALLOWED_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
}

export function parseEditableLinkValue(
  value: string,
): { text: string; href: string } | null {
  if (value.length > MAX_LINK_TEXT_LENGTH + MAX_LINK_HREF_LENGTH + 100) return null;

  try {
    const parsed = JSON.parse(value) as { text?: unknown; href?: unknown };
    if (typeof parsed.text !== 'string' || typeof parsed.href !== 'string') return null;
    if (parsed.text.length === 0 || parsed.text.length > MAX_LINK_TEXT_LENGTH) return null;
    if (!isSafeEditableHref(parsed.href)) return null;
    return { text: parsed.text, href: parsed.href };
  } catch {
    return null;
  }
}
