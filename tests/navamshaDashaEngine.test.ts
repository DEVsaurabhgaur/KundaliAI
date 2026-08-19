import { describe, it, expect } from 'vitest';
import { generateNavamshaDashaSequence } from '../src/lib/sthira/navamshaDashaEngine';

describe('Navamsha Dasha', () => {
  it('generates 12 dasha stages', () => {
    const seq = generateNavamshaDashaSequence(4);
    expect(seq).toHaveLength(12);
  });
});
