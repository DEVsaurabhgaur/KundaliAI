import { describe, it, expect } from 'vitest';
import { evaluateKotaChakra } from '../src/lib/kotaChakra';

describe('Kota Chakra Engine', () => {
  it('calculates safety index based on stambha occupants', () => {
    const status = evaluateKotaChakra([{ planet: 'Jupiter', houseFromMoon: 1 }]);
    expect(status.fortressSafetyIndex).toBeGreaterThan(0);
  });
});
