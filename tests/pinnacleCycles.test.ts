import { describe, it, expect } from 'vitest';
import { calculatePinnacles } from '../src/lib/numerology/pinnacleCycles';

describe('Pinnacle Cycles', () => {
  it('calculates 4 life pinnacles', () => {
    const p = calculatePinnacles(15, 8, 1990);
    expect(p.firstPinnacle).toBeGreaterThanOrEqual(1);
    expect(p.firstPinnacle).toBeLessThanOrEqual(9);
  });
});
