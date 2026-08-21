import { describe, it, expect } from 'vitest';
import { calculateBSP13SunZenith } from '../src/lib/bsp/bspRule13Sun10th';

describe('BSP Rule 13', () => {
  it('calculates 10th from Sun', () => {
    expect(calculateBSP13SunZenith(1)).toBe(10);
  });
});
