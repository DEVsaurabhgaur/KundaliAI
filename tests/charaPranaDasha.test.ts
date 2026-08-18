import { describe, it, expect } from 'vitest';
import { getCharaPranaMinutes } from '../src/lib/chara/charaPranaDasha';

describe('Chara Prana Dasha', () => {
  it('computes minutes for 60 sookshma hours', () => {
    expect(getCharaPranaMinutes(60)).toBe(300);
  });
});
