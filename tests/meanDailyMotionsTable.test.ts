import { describe, it, expect } from 'vitest';
import { getMeanSpeed } from '../src/lib/speed/meanDailyMotionsTable';

describe('Mean Daily Motions', () => {
  it('returns 0.9856 for Sun and 13.1763 for Moon', () => {
    expect(getMeanSpeed('Sun')).toBe(0.9856);
    expect(getMeanSpeed('Moon')).toBe(13.1763);
  });
});
