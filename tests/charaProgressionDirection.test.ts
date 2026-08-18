import { describe, it, expect } from 'vitest';
import { isDirectProgression, getCharaDashaSequence } from '../src/lib/chara/charaProgressionDirection';

describe('Chara Dasha Progression', () => {
  it('validates direct progression for Aries Lagna', () => {
    expect(isDirectProgression(0)).toBe(true);
    const seq = getCharaDashaSequence(0);
    expect(seq).toHaveLength(12);
    expect(seq[1]).toBe(1);
  });
});
