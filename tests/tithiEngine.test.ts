import { describe, it, expect } from 'vitest';
import { calculateTithi } from '../src/lib/panchang/tithiEngine';

describe('Tithi Calculation Engine', () => {
  it('calculates Shukla Pratipada when Moon is 6 degrees ahead of Sun', () => {
    const tithi = calculateTithi(0, 6);
    expect(tithi.tithiNumber).toBe(1);
    expect(tithi.paksha).toBe('Shukla Paksha');
  });
});
