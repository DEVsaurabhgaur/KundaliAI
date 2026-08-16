import { describe, it, expect } from 'vitest';
import { calculateMulank } from '../src/lib/numerology/mulank';

describe('Mulank Calculator', () => {
  it('reduces day 28 to 1 (2 + 8 = 10 -> 1)', () => {
    expect(calculateMulank(28)).toBe(1);
    expect(calculateMulank(15)).toBe(6);
  });
});
