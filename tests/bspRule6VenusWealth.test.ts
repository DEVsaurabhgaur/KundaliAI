import { describe, it, expect } from 'vitest';
import { calculateBSP6VenusAbundance } from '../src/lib/bsp/bspRule6VenusWealth';

describe('BSP Rule 6', () => {
  it('activates 2nd and 7th from Venus in 25th year', () => {
    const res = calculateBSP6VenusAbundance(1);
    expect(res.wealth2nd).toBe(2);
    expect(res.partnership7th).toBe(7);
  });
});
