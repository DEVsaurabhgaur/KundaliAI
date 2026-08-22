import { describe, it, expect } from 'vitest';
import { isDeceleratingTowardsStation } from '../src/lib/speed/planetaryDecelerationVelocity';

describe('Deceleration Towards Station', () => {
  it('identifies decreasing speed magnitude', () => {
    expect(isDeceleratingTowardsStation(0.5, 0.2)).toBe(true);
  });
});
