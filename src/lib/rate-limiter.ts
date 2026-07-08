/** Per-session rate limiter for KundaliAI API calls */

interface RateLimiterOptions {
  maxRequests: number;
  windowMs: number;
  storageKey?: string;
}

interface RateLimiterState {
  count: number;
  windowStart: number;
}

export class RateLimiter {
  private maxRequests: number;
  private windowMs: number;
  private storageKey: string;

  constructor(options: RateLimiterOptions) {
    this.maxRequests = options.maxRequests;
    this.windowMs = options.windowMs;
    this.storageKey = options.storageKey ?? 'kundali_rate_limit';
  }

  private getState(): RateLimiterState {
    try {
      const raw = sessionStorage.getItem(this.storageKey);
      if (raw) return JSON.parse(raw) as RateLimiterState;
    } catch { /* ignore */ }
    return { count: 0, windowStart: Date.now() };
  }

  private setState(state: RateLimiterState): void {
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify(state));
    } catch { /* ignore */ }
  }

  /**
   * Check if a new request is allowed.
   * @returns true if allowed, false if rate limit exceeded
   */
  isAllowed(): boolean {
    const now = Date.now();
    const state = this.getState();

    if (now - state.windowStart > this.windowMs) {
      this.setState({ count: 1, windowStart: now });
      return true;
    }

    if (state.count >= this.maxRequests) return false;

    this.setState({ count: state.count + 1, windowStart: state.windowStart });
    return true;
  }

  /** Returns remaining requests in the current window. */
  getRemainingRequests(): number {
    const now = Date.now();
    const state = this.getState();
    if (now - state.windowStart > this.windowMs) return this.maxRequests;
    return Math.max(0, this.maxRequests - state.count);
  }

  /** Returns milliseconds until the window resets. */
  getMsUntilReset(): number {
    const state = this.getState();
    const elapsed = Date.now() - state.windowStart;
    return Math.max(0, this.windowMs - elapsed);
  }

  /** Reset the rate limiter state. */
  reset(): void {
    try {
      sessionStorage.removeItem(this.storageKey);
    } catch { /* ignore */ }
  }
}

export const defaultRateLimiter = new RateLimiter({ maxRequests: 10, windowMs: 60_000 });
