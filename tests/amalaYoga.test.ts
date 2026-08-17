import { describe, it, expect } from 'vitest';
import { checkAmalaYoga } from '../src/lib/yogas/amalaYoga';

describe('Amala Yoga', () => {
  it('confirms yoga when benefic is in 10th', () => {
    expect(checkAmalaYoga(true)).toBe(true);
  });
});
