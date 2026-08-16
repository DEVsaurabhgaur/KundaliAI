import { describe, it, expect } from 'vitest';
import { getBirthTatwa } from '../src/lib/career/tatwaShodhana';

describe('Tatwa Shodhana', () => {
  it('returns Mahabhuta element based on sunrise interval', () => {
    const tatwa = getBirthTatwa(30, 1);
    expect(tatwa).toBeDefined();
  });
});
