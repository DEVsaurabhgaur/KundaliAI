import { describe, it, expect } from 'vitest';
import { calculateD4 } from '../src/lib/vargas/d4Chaturthamsha';

describe('D4 Chaturthamsha Calculator', () => {
  it('calculates D4 sign index for 5 degrees Aries', () => {
    const d4 = calculateD4('Jupiter', 5.0);
    expect(d4.signName).toBe('Aries');
  });
});
