import { describe, it, expect } from 'vitest';
import { checkVipareetaVedha } from '../src/lib/gochara/vipareetaVedha';

describe('Vipareeta Vedha', () => {
  it('neutralizes adverse transit when opposing occupant is present', () => {
    expect(checkVipareetaVedha(true, true)).toBe(true);
  });
});
