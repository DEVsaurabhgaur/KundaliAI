import { describe, it, expect } from 'vitest';
import { calculateBSP10JupiterGains } from '../src/lib/bsp/bspRule10Jupiter11th';

describe('BSP Rule 10', () => {
  it('calculates 11th house from Jupiter', () => {
    expect(calculateBSP10JupiterGains(1)).toBe(11);
  });
});
