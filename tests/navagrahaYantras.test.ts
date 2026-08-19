import { describe, it, expect } from 'vitest';
import { SURYA_YANTRA_GRID, verifyMagicSquare } from '../src/lib/remedies/navagrahaYantras';

describe('Navagraha Yantras', () => {
  it('validates Surya Yantra constant 15', () => {
    expect(verifyMagicSquare(SURYA_YANTRA_GRID, 15)).toBe(true);
  });
});
