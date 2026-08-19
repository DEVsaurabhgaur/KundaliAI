import { describe, it, expect } from 'vitest';
import { getCardinalTrikonaSequence } from '../src/lib/sthira/trikonaDashaCardinal';

describe('Cardinal Trikona Progression', () => {
  it('generates trinal signs [0, 4, 8] for Aries start', () => {
    expect(getCardinalTrikonaSequence(0)).toEqual([0, 4, 8]);
  });
});
