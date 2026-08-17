import { describe, it, expect } from 'vitest';
import { checkDailyTarabala } from '../src/lib/gochara/tarabalaGochara';

describe('Daily Tarabala', () => {
  it('validates auspicious Tara numbers (2, 4, 6, 8, 9)', () => {
    expect(checkDailyTarabala(0, 1)).toBe(true); // Sampat Tara (2)
  });
});
