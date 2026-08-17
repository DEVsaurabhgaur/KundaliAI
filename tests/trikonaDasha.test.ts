import { describe, it, expect } from 'vitest';
import { generateTrikonaSequence } from '../src/lib/jaimini/trikonaDasha';

describe('Trikona Dasha Sequence', () => {
  it('generates trinal signs (1st, 5th, 9th)', () => {
    const seq = generateTrikonaSequence(0);
    expect(seq).toEqual([0, 4, 8]);
  });
});
