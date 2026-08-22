import { describe, it, expect } from 'vitest';
import { getDrekkanaDeity } from '../src/lib/drekkana/drekkanaDeities27';

describe('Drekkana Deities', () => {
  it('returns Narada for 1st decanate and Agastya for 2nd', () => {
    expect(getDrekkanaDeity(1)).toContain('Narada');
    expect(getDrekkanaDeity(2)).toContain('Agastya');
  });
});
