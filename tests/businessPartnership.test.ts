import { describe, it, expect } from 'vitest';
import { evaluateBusinessPartnership } from '../src/lib/career/businessPartnership';

describe('Business Partnership Compatibility', () => {
  it('returns high score for trine placements (1-5-9)', () => {
    expect(evaluateBusinessPartnership(0, 4)).toBe(90);
  });
});
