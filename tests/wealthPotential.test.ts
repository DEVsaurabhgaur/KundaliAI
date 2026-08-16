import { describe, it, expect } from 'vitest';
import { calculateWealthPotentialIndex } from '../src/lib/career/wealthPotential';

describe('Wealth Potential Index', () => {
  it('calculates score based on 2nd and 11th lord status', () => {
    const score = calculateWealthPotentialIndex(true, true);
    expect(score).toBe(100);
  });
});
