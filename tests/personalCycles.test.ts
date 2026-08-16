import { describe, it, expect } from 'vitest';
import { calculatePersonalYear } from '../src/lib/numerology/personalCycles';

describe('Personal Year Calculation', () => {
  it('computes personal year vibration 1-9', () => {
    const py = calculatePersonalYear(15, 8, 2026);
    expect(py).toBeGreaterThanOrEqual(1);
    expect(py).toBeLessThanOrEqual(9);
  });
});
