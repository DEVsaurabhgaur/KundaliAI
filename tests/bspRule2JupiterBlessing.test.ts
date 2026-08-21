import { describe, it, expect } from 'vitest';
import { calculateBSP2JupiterBlessing } from '../src/lib/bsp/bspRule2JupiterBlessing';

describe('BSP Rule 2', () => {
  it('blesses 5th and 9th from Jupiter and activates 2nd in 32nd year', () => {
    const res = calculateBSP2JupiterBlessing(1);
    expect(res.blessed5th).toBe(5);
    expect(res.blessed9th).toBe(9);
    expect(res.activated2ndIn32ndYear).toBe(2);
  });
});
