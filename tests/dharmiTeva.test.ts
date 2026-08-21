import { describe, it, expect } from 'vitest';
import { evaluateLalKitabTeva } from '../src/lib/lalkitab/dharmiTeva';

describe('Lal Kitab Teva Classification', () => {
  it('classifies Dharmi Teva when Jupiter is in 1st house', () => {
    const res = evaluateLalKitabTeva(1, 1, 1, false);
    expect(res.isDharmiTeva).toBe(true);
  });
});
