import { describe, it, expect } from 'vitest';
import { isMahaYogada } from '../src/lib/career/mahaYogada';

describe('Maha Yogada Verification', () => {
  it('validates aspect across both D1 and D9', () => {
    expect(isMahaYogada(true, true)).toBe(true);
    expect(isMahaYogada(true, false)).toBe(false);
  });
});
