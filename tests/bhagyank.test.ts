import { describe, it, expect } from 'vitest';
import { calculateBhagyank } from '../src/lib/numerology/bhagyank';

describe('Bhagyank Calculator', () => {
  it('calculates destiny number for full birth date', () => {
    const bhagyank = calculateBhagyank(15, 8, 1995);
    expect(bhagyank).toBeGreaterThanOrEqual(1);
    expect(bhagyank).toBeLessThanOrEqual(33);
  });
});
