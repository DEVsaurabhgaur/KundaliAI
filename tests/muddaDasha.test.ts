import { describe, it, expect } from 'vitest';
import { calculateMuddaDasha } from '../src/lib/dasha/muddaDasha';

describe('Mudda Dasha Engine', () => {
  it('generates 9 annual planetary intervals', () => {
    const mudda = calculateMuddaDasha('Sun');
    expect(mudda).toHaveLength(9);
  });
});
