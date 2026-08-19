import { describe, it, expect } from 'vitest';
import { getSthiraDashaYears, generateSthiraDashaSequence } from '../src/lib/sthira/sthiraDashaEngine';

describe('Sthira Dasha Engine', () => {
  it('assigns 7 years to movable, 8 to fixed, 9 to dual signs', () => {
    expect(getSthiraDashaYears(0)).toBe(7); // Aries
    expect(getSthiraDashaYears(1)).toBe(8); // Taurus
    expect(getSthiraDashaYears(2)).toBe(9); // Gemini
  });

  it('generates a 12-sign sequence', () => {
    const seq = generateSthiraDashaSequence(0);
    expect(seq).toHaveLength(12);
  });
});
