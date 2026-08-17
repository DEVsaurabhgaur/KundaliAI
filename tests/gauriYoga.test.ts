import { describe, it, expect } from 'vitest';
import { checkGauriYoga } from '../src/lib/yogas/gauriYoga';

describe('Gauri Yoga', () => {
  it('confirms yoga with exalted Moon and strong 9th lord', () => {
    expect(checkGauriYoga(true, true)).toBe(true);
  });
});
