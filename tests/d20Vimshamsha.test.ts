import { describe, it, expect } from 'vitest';
import { calculateD20 } from '../src/lib/vargas/d20Vimshamsha';

describe('D20 Vimshamsha Calculator', () => {
  it('calculates D20 sign for 12 degrees Aries', () => {
    const d20 = calculateD20('Sun', 12.0);
    expect(d20.signName).toBeDefined();
  });
});
