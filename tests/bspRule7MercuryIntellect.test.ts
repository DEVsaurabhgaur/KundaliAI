import { describe, it, expect } from 'vitest';
import { calculateBSP7MercuryAwakening } from '../src/lib/bsp/bspRule7MercuryIntellect';

describe('BSP Rule 7', () => {
  it('awakens 4th and 10th from Mercury in 34th year', () => {
    const res = calculateBSP7MercuryAwakening(1);
    expect(res.learning4th).toBe(4);
    expect(res.enterprise10th).toBe(10);
  });
});
