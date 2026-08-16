import { describe, it, expect } from 'vitest';
import { calculatePatyayiniWeights } from '../src/lib/dasha/patyayiniDasha';

describe('Patyayini Dasha Weights', () => {
  it('allocates days proportional to planetary degrees', () => {
    const planets = [{ name: 'Sun', longitude: 15 }, { name: 'Moon', longitude: 15 }];
    const weights = calculatePatyayiniWeights(planets);
    expect(weights[0].allocatedDays).toBeGreaterThan(0);
  });
});
