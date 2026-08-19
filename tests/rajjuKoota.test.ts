import { describe, it, expect } from 'vitest';
import { checkRajjuMatch, getRajjuGroup } from '../src/lib/synastry/rajjuKoota';

describe('Rajju Koota', () => {
  it('identifies Mrigashira (4) in Sira Rajju', () => {
    expect(getRajjuGroup(4)).toBe('Sira');
  });

  it('declares compatible if stars belong to different Rajjus', () => {
    const match = checkRajjuMatch(4, 0);
    expect(match.isCompatible).toBe(true);
  });
});
