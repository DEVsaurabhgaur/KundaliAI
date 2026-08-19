import { describe, it, expect } from 'vitest';
import { hasKakshyaBindu } from '../src/lib/pinda/prastaraBinduLookup';

describe('Prastara Bindu Lookup', () => {
  it('checks bindu in 1st kakshya (0°-3°45')', () => {
    expect(hasKakshyaBindu(2.0, [true, false, false, false, false, false, false, false])).toBe(true);
  });
});
