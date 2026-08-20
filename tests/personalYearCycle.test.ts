import { describe, it, expect } from 'vitest';
import { calculatePersonalYear } from '../src/lib/numerology/personalYearCycle';

describe('Personal Year Cycle', () => {
  it('computes annual vibration between 1 and 9', () => {
    const yr = calculatePersonalYear(15, 8, 2026);
    expect(yr).toBeGreaterThanOrEqual(1);
    expect(yr).toBeLessThanOrEqual(9);
  });
});
