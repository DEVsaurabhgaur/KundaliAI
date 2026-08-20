import { describe, it, expect } from 'vitest';
import { getWaterPlacementAdvice } from '../src/lib/vastu/waterElementPlacements';

describe('Water Element Placement', () => {
  it('recommends underground water in Northeast', () => {
    expect(getWaterPlacementAdvice(true)).toContain('auspicious');
  });
});
