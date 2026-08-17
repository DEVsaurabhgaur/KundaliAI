import { describe, it, expect } from 'vitest';
import { evaluateMurtiNirnaya } from '../src/lib/gochara/murtiNirnaya';

describe('Murti Nirnaya', () => {
  it('assigns Swarna (Gold) to Moon in 1st, 6th, 11th', () => {
    const res = evaluateMurtiNirnaya(11);
    expect(res.murti).toContain('Swarna');
  });
});
