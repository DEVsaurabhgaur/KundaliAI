import { describe, it, expect } from 'vitest';
import { calculateD45 } from '../src/lib/vargas/d45Akshavedamsha';

describe('D45 Akshavedamsha Calculator', () => {
  it('calculates D45 sign for 7 degrees Aries', () => {
    const d45 = calculateD45('Jupiter', 7.0);
    expect(d45.signName).toBeDefined();
  });
});
