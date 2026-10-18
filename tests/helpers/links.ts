const ALLOWED = /^(https?:\/\/|mailto:|#|\/)/i;

export function isAllowedHref(href: string): boolean {
  return ALLOWED.test(href.trim());
}

export function isExternalHttp(href: string): boolean {
  return /^https?:\/\//i.test(href.trim());
}

export function isHashHref(href: string): boolean {
  return href.trim().startsWith("#");
}
