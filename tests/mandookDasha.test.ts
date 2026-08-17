import { describe, it, expect } from 'vitest';
import { generateMandookSequence } from '../src/lib/jaimini/mandookDasha';

describe('Mandook Dasha Sequence', () => {
  it('generates 12 leap signs', () => {
    const seq = generateMandookSequence(2);
    expect(seq).toHaveLength(12);
    expect(seq[1]).toBe(4);
  });
});
