import { describe, it, expect } from 'vitest';
import { calculateActiveBSPYears } from '../src/lib/bsp/bspHouseImpactCalculator';

describe('BSP House Impact', () => {
  it('matches active BSP planetary activation ages', () => {
    expect(calculateActiveBSPYears(28, [28, 56])).toBe(true);
  });
});
