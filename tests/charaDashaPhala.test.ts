import { describe, it, expect } from 'vitest';
import { getCharaDashaPhala } from '../src/lib/chara/charaDashaPhala';

describe('Chara Dasha Phala', () => {
  it('returns phala for Aries', () => {
    expect(getCharaDashaPhala('Aries')).toContain('Dynamic');
  });
});
