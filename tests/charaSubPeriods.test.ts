import { describe, it, expect } from 'vitest';
import { getCharaSubPeriods } from '../src/lib/chara/charaSubPeriods';

describe('Chara Sub-Periods', () => {
  it('generates 12 sub-periods', () => {
    const subs = getCharaSubPeriods(0, 6);
    expect(subs).toHaveLength(12);
  });
});
