import { describe, it, expect } from 'vitest';
import { applyTopocentricParallax } from '../src/lib/kp/topocentricEphemeris';

describe('Topocentric Ephemeris', () => {
  it('adjusts geocentric longitude with parallax offset', () => {
    const topo = applyTopocentricParallax(100.0, 0.5);
    expect(topo).toBe(100.5);
  });
});
