import { describe, it, expect } from 'vitest';
import { hasVedhaAffliction } from '../src/lib/synastry/vedhaKoota';

describe('Vedha Koota', () => {
  it('detects Ashwini (0) and Jyeshtha (17) as Vedha pair', () => {
    expect(hasVedhaAffliction(0, 17)).toBe(true);
    expect(hasVedhaAffliction(0, 5)).toBe(false);
  });
});
