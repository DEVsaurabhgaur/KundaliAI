import { describe, it, expect } from 'vitest';
import { calculateBSP3RahuInfluence } from '../src/lib/bsp/bspRule3RahuForeign';

describe('BSP Rule 3', () => {
  it('influences 6th from Rahu and activates 12th in 37th year', () => {
    const res = calculateBSP3RahuInfluence(1);
    expect(res.foreign6th).toBe(6);
    expect(res.activated12thIn37thYear).toBe(12);
  });
});
