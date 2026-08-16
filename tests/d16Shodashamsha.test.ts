import { describe, it, expect } from 'vitest';
import { calculateD16 } from '../src/lib/vargas/d16Shodashamsha';

describe('D16 Shodashamsha Calculator', () => {
  it('calculates D16 sign for 10 degrees Aries', () => {
    const d16 = calculateD16('Venus', 10.0);
    expect(d16.signName).toBeDefined();
  });
});
