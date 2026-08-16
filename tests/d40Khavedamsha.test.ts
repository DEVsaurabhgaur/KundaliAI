import { describe, it, expect } from 'vitest';
import { calculateD40 } from '../src/lib/vargas/d40Khavedamsha';

describe('D40 Khavedamsha Calculator', () => {
  it('calculates D40 sign for 2 degrees Aries', () => {
    const d40 = calculateD40('Saturn', 2.0);
    expect(d40.signName).toBeDefined();
  });
});
