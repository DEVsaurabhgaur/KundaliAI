import { describe, it, expect } from 'vitest';
import { isWithinStationOrb } from '../src/lib/speed/planetaryStationingDegreeSpan';

describe('Station Orb Boundary', () => {
  it('detects planet within 0.5 deg of station point', () => {
    expect(isWithinStationOrb(15.2, 15.0)).toBe(true);
    expect(isWithinStationOrb(16.0, 15.0)).toBe(false);
  });
});
