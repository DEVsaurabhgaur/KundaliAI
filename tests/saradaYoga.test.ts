import { describe, it, expect } from 'vitest';
import { checkSaradaYoga } from '../src/lib/yogas/saradaYoga';

describe('Sarada Yoga', () => {
  it('confirms yoga when 10th lord in 5th with strong Sun', () => {
    expect(checkSaradaYoga(true)).toBe(true);
  });
});
