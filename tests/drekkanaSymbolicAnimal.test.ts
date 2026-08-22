import { describe, it, expect } from 'vitest';
import { getDrekkanaTotem } from '../src/lib/drekkana/drekkanaSymbolicAnimal';

describe('Drekkana Animal Totem', () => {
  it('returns Simha for 1st decanate', () => {
    expect(getDrekkanaTotem(1)).toContain('Simha');
  });
});
