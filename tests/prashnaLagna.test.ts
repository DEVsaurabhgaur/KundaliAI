import { describe, it, expect } from 'vitest';
import { calculatePrashnaLagna } from '../src/lib/prashna/prashnaLagna';

describe('Prashna Lagna', () => {
  it('returns valid degree in 0-360 range', () => {
    const lagna = calculatePrashnaLagna(Date.now(), 28.61, 77.2);
    expect(lagna).toBeGreaterThanOrEqual(0);
    expect(lagna).toBeLessThan(360);
  });
});
