import { describe, it, expect } from 'vitest';
import { getGulikaSegment } from '../src/lib/panchang/gulikaKala';

describe('Gulika Kala', () => {
  it('assigns 7th segment to Sunday', () => {
    expect(getGulikaSegment(0)).toBe(7);
  });
});
