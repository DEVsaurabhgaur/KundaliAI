import { describe, it, expect } from 'vitest';
import { checkPushkalYoga } from '../src/lib/yogas/pushkalYoga';

describe('Pushkal Yoga', () => {
  it('confirms yoga when Lagna lord conjoins Moon in Kendra', () => {
    expect(checkPushkalYoga(true)).toBe(true);
  });
});
