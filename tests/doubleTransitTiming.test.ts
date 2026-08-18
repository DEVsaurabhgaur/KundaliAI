import { describe, it, expect } from 'vitest';
import { checkNadiDoubleTransit } from '../src/lib/nadi/doubleTransitTiming';

describe('Double Transit Timing', () => {
  it('triggers when both Guru and Shani aspect natal target sign', () => {
    expect(checkNadiDoubleTransit(0, 0, 0)).toBe(true);
  });
});
