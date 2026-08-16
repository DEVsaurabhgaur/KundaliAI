import { describe, it, expect } from 'vitest';
import { calculateD27 } from '../src/lib/vargas/d27Bhamsa';

describe('D27 Bhamsa Calculator', () => {
  it('calculates D27 sign for 15 degrees Aries', () => {
    const d27 = calculateD27('Mars', 15.0);
    expect(d27.signName).toBeDefined();
  });
});
