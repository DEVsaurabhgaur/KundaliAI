import { describe, it, expect } from 'vitest';
import { calculateD3Sign } from '../src/lib/drekkana/drekkanaVargaChartBuilder';

describe('D-3 Drekkana Sign Builder', () => {
  it('maps 0-10 deg to same sign, 10-20 to 5th, 20-30 to 9th', () => {
    expect(calculateD3Sign(0, 5.0)).toBe(0); // Aries 1st
    expect(calculateD3Sign(0, 15.0)).toBe(4); // Leo 2nd
    expect(calculateD3Sign(0, 25.0)).toBe(8); // Sag 3rd
  });
});
