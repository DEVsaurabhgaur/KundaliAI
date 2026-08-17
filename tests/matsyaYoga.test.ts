import { describe, it, expect } from 'vitest';
import { checkMatsyaYoga } from '../src/lib/yogas/matsyaYoga';

describe('Matsya Yoga', () => {
  it('confirms yoga when benefics occupy 1st and 9th houses', () => {
    expect(checkMatsyaYoga(true)).toBe(true);
  });
});
