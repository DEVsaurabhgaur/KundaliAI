import { describe, it, expect } from 'vitest';
import { checkKalanidhiYoga } from '../src/lib/yogas/kalanidhiYoga';

describe('Kalanidhi Yoga', () => {
  it('confirms yoga when Jupiter conjoins Venus/Mercury in 2nd or 5th', () => {
    expect(checkKalanidhiYoga(true)).toBe(true);
  });
});
