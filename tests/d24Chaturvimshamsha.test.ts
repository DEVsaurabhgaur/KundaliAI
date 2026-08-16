import { describe, it, expect } from 'vitest';
import { calculateD24 } from '../src/lib/vargas/d24Chaturvimshamsha';

describe('D24 Siddhamsa Calculator', () => {
  it('calculates D24 sign for 3 degrees Aries', () => {
    const d24 = calculateD24('Mercury', 3.0);
    expect(d24.signName).toBeDefined();
  });
});
