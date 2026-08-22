import { describe, it, expect } from 'vitest';
import { getDrekkanaNature } from '../src/lib/drekkana/drekkana36Faces';

describe('36 Drekkana Faces', () => {
  it('returns archetypal symbology', () => {
    const res = getDrekkanaNature(0, 1);
    expect(res).toBeDefined();
  });
});
