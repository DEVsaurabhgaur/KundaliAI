import { describe, it, expect } from 'vitest';
import { NAKSHATRA_TOTEMS } from '../src/lib/nakshatraTotems';

describe('Nakshatra Totems', () => {
  it('retrieves sacred tree and deity for Ashwini', () => {
    const totem = NAKSHATRA_TOTEMS['Ashwini'];
    expect(totem.bird).toBe('Wild Eagle');
  });
});
