import { describe, it, expect } from 'vitest';
import { getSacrificialPlanet } from '../src/lib/lalkitab/sacrificialGoat';

describe('Sacrificial Planet (Qurbani ke Bakre)', () => {
  it('identifies Venus as scapegoat for afflicted Sun', () => {
    expect(getSacrificialPlanet('Sun')).toBe('Venus');
    expect(getSacrificialPlanet('Moon')).toBe('Sun');
  });
});
