import { describe, it, expect } from 'vitest';
import { isPlanetaryStationing } from '../src/lib/speed/stambhanaStation';

describe('Stambhana Stationing', () => {
  it('detects near-zero velocity stationing', () => {
    expect(isPlanetaryStationing(0.01)).toBe(true);
    expect(isPlanetaryStationing(0.5)).toBe(false);
  });
});
