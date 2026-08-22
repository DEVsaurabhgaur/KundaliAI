import { describe, it, expect } from 'vitest';
import { calculateKCDAntardasha } from '../src/lib/kcd/kcdAntardashaCalculator';

describe('KCD Antardasha', () => {
  it('computes proportional duration', () => {
    const dur = calculateKCDAntardasha(21, 7, 100);
    expect(dur).toBe(1.47);
  });
});
