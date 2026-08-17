import { describe, it, expect } from 'vitest';
import { evaluateBhadra } from '../src/lib/panchang/bhadraTimings';

describe('Bhadra Timing Engine', () => {
  it('identifies Swarga Loka dwelling for Aries Moon', () => {
    const bhadra = evaluateBhadra(0, true);
    expect(bhadra.bhadraVas).toBe('Swarga Loka');
    expect(bhadra.isHarmfulOnEarth).toBe(false);
  });
});
