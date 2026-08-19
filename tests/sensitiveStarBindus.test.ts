import { describe, it, expect } from 'vitest';
import { getSensitiveStarIndices } from '../src/lib/pinda/sensitiveStarBindus';

describe('Sensitive Star Bindus', () => {
  it('finds 10th star as Karma and 19th as Adhana', () => {
    const stars = getSensitiveStarIndices(0);
    expect(stars.karma).toBe(9);
    expect(stars.adhana).toBe(18);
  });
});
