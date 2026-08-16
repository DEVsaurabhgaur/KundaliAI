import { describe, it, expect } from 'vitest';
import { calculatePrashnaAscendant } from '../src/lib/prashna/prashnaAscendant';

describe('Prashna Ascendant', () => {
  it('computes valid degree between 0 and 360', () => {
    const asc = calculatePrashnaAscendant(Date.now(), 28.6139, 77.2090);
    expect(asc).toBeGreaterThanOrEqual(0);
    expect(asc).toBeLessThan(360);
  });
});
