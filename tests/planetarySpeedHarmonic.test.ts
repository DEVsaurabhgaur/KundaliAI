import { describe, it, expect } from 'vitest';
import { isSpeedHarmonious } from '../src/lib/speed/planetarySpeedHarmonic';

describe('Speed Harmonic', () => {
  it('confirms harmony within 90-110% velocity range', () => {
    expect(isSpeedHarmonious(100)).toBe(true);
    expect(isSpeedHarmonious(140)).toBe(false);
  });
});
