import { describe, it, expect } from 'vitest';
import { checkSaraswatiYoga } from '../src/lib/yogas/saraswatiYoga';

describe('Saraswati Yoga', () => {
  it('confirms yoga with strong Jupiter and benefics in trines', () => {
    expect(checkSaraswatiYoga(true, true)).toBe(true);
  });
});
