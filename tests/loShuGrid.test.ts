import { describe, it, expect } from 'vitest';
import { generateLoShuGrid } from '../src/lib/numerology/loShuGrid';

describe('Lo Shu Grid', () => {
  it('counts digit occurrences and evaluates planes', () => {
    const res = generateLoShuGrid([4, 9, 2]);
    expect(res.thoughtPlane).toBe(3);
  });
});
