import { describe, it, expect } from 'vitest';
import { checkSBCIntersection } from '../src/lib/sbc/triPatakiSBCIntersection';

describe('Tripataki SBC Intersection', () => {
  it('detects star intersection lines', () => {
    expect(checkSBCIntersection(0, 14)).toBe(true);
  });
});
