import { describe, it, expect } from 'vitest';
import { getCharaSookshmaHours } from '../src/lib/chara/charaSookshmaDasha';

describe('Chara Sookshma Dasha', () => {
  it('computes hours for 30 pratyantar days', () => {
    expect(getCharaSookshmaHours(30)).toBe(60);
  });
});
