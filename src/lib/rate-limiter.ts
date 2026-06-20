type RateLimitInfo = {
  count: number;
  resetTime: number;
};

const store = new Map<string, RateLimitInfo>();

export interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

export function isRateLimited(key: string, options: RateLimitOptions): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const current = store.get(key);

  // Periodic inline cleanup when database gets large to prevent memory leaks
  if (store.size > 1000) {
    for (const [k, val] of store.entries()) {
      if (now > val.resetTime) {
        store.delete(k);
      }
    }
  }

  if (!current) {
    store.set(key, { count: 1, resetTime: now + options.windowMs });
    return { limited: false, retryAfter: 0 };
  }

  if (now > current.resetTime) {
    current.count = 1;
    current.resetTime = now + options.windowMs;
    return { limited: false, retryAfter: 0 };
  }

  if (current.count >= options.maxRequests) {
    const retryAfter = Math.ceil((current.resetTime - now) / 1000);
    return { limited: true, retryAfter };
  }

  current.count += 1;
  return { limited: false, retryAfter: 0 };
}
