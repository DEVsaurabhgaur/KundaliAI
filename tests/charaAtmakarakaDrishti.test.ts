import { describe, it, expect } from 'vitest';
import { checkAKDrishti } from '../src/lib/chara/charaAtmakarakaDrishti';

describe('Atmakaraka Drishti', () => {
  it('confirms drishti when signs match or form trine/opposition', () => {
    expect(checkAKDrishti(0, 0)).toBe(true);
    expect(checkAKDrishti(0, 4)).toBe(true);
  });
});
