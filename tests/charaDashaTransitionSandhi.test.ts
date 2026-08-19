import { describe, it, expect } from 'vitest';
import { isCharaDashaInSandhi } from '../src/lib/sthira/charaDashaTransitionSandhi';

describe('Chara Dasha Sandhi', () => {
  it('identifies final 6 months as Sandhi transition', () => {
    expect(isCharaDashaInSandhi(4)).toBe(true);
    expect(isCharaDashaInSandhi(12)).toBe(false);
  });
});
