import { describe, it, expect } from 'vitest';
import { getKCDDuration } from '../src/lib/kcd/kcdSignDurations';

describe('KCD Durations', () => {
  it('returns 7 years for Aries and 21 years for Cancer', () => {
    expect(getKCDDuration(0)).toBe(7);
    expect(getKCDDuration(3)).toBe(21);
  });
});
