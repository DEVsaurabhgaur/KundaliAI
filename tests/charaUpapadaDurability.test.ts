import { describe, it, expect } from 'vitest';
import { isUpapadaDashaActive } from '../src/lib/chara/charaUpapadaDurability';

describe('Upapada Dasha', () => {
  it('detects active UL sign dasha', () => {
    expect(isUpapadaDashaActive(4, 4)).toBe(true);
  });
});
