import { describe, it, expect } from 'vitest';
import { generateKCDSequence } from '../src/lib/kcd/kcdMahaDashaSequence';

describe('KCD Mahadasha Sequence', () => {
  it('generates 9 dasha stages', () => {
    const seq = generateKCDSequence(0);
    expect(seq).toHaveLength(9);
  });
});
