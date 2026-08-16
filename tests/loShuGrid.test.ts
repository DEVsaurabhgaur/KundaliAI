import { describe, it, expect } from 'vitest';
import { generateLoShuGrid } from '../src/lib/numerology/loShuGrid';

describe('Lo Shu Grid Generator', () => {
  it('populates 3x3 matrix counts', () => {
    const data = generateLoShuGrid('15-08-1995');
    expect(data.grid).toHaveLength(3);
    expect(data.counts[1]).toBeGreaterThanOrEqual(1);
  });
});
