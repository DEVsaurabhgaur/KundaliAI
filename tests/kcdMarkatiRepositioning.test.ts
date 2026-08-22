import { describe, it, expect } from 'vitest';
import { isMarkatiJump } from '../src/lib/kcd/kcdMarkatiRepositioning';

describe('Markati Jump', () => {
  it('detects backward leap jump', () => {
    expect(isMarkatiJump(4, 3)).toBe(true);
  });
});
