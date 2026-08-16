import { describe, it, expect } from 'vitest';
import { VASTU_16_ZONES } from '../src/lib/vastu/vastuZones';

describe('16 Vastu Zones', () => {
  it('defines 16 zones with elemental affinities', () => {
    expect(VASTU_16_ZONES).toHaveLength(16);
  });
});
