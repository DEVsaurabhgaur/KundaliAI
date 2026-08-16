import { describe, it, expect } from 'vitest';
import { evaluateLalKitabPlanetState } from '../src/lib/lalkitab/planetTypes';

describe('Lal Kitab Planet States', () => {
  it('classifies Jupiter as naturally Dharmi', () => {
    const state = evaluateLalKitabPlanetState('Jupiter', 1, true);
    expect(state.isDharmi).toBe(true);
  });
});
