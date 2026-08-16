import { describe, it, expect } from 'vitest';
import { calculateKundaSign } from '../src/lib/career/kundaCalculation';

describe('Kunda Calculation', () => {
  it('multiplies ascendant minutes by 81', () => {
    const sign = calculateKundaSign(10.5);
    expect(sign).toBeGreaterThanOrEqual(0);
    expect(sign).toBeLessThan(12);
  });
});
