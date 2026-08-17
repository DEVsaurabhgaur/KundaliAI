import { describe, it, expect } from 'vitest';
import { isTransitBenefic } from '../src/lib/gochara/transitBeneficHouses';

describe('Gochara Benefic Houses', () => {
  it('validates Sun benefic transit in 3, 6, 10, 11', () => {
    expect(isTransitBenefic('Sun', 3)).toBe(true);
    expect(isTransitBenefic('Sun', 11)).toBe(true);
    expect(isTransitBenefic('Sun', 1)).toBe(false);
  });
});
