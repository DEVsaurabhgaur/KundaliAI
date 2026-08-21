import { describe, it, expect } from 'vitest';
import { getScapegoatPlanet } from '../src/lib/lalkitab/kurbaniKeBakre';

describe('Kurbani ke Bakre', () => {
  it('identifies Ketu as scapegoat for Jupiter', () => {
    expect(getScapegoatPlanet('Jupiter')).toBe('Ketu');
  });
});
