const windowMs = 60 * 1000;
const maxRequests = 10;

const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > maxRequests;
}
