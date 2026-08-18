import { describe, it, expect } from 'vitest';
import { isAmKDashaActive } from '../src/lib/chara/charaAmatyakarakaCareer';

describe('Amatyakaraka Dasha', () => {
  it('identifies career milestone during AmK sign dasha', () => {
    expect(isAmKDashaActive(9, 9)).toBe(true);
  });
});
