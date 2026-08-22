import { describe, it, expect } from 'vitest';
import { evaluateLunarEclipseTides } from '../src/lib/medini/chandraGrahanaRainfall';

describe('Lunar Eclipse Tides', () => {
  it('identifies tidal swells during total full moon eclipse', () => {
    expect(evaluateLunarEclipseTides(true)).toContain('tidal swells');
  });
});
