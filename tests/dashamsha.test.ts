import { describe, it, expect } from 'vitest';
import { calculateDashamsha } from '../src/lib/dashamsha';

describe('Dashamsha D10 Calculation Engine', () => {
  it('correctly calculates D10 position for odd signs', () => {
    const result = calculateDashamsha('Jupiter', 4.5); // Aries (odd), 2nd portion
    expect(result.portion).toBe(2);
    expect(result.dashamshaSignName).toBe('Taurus');
  });
});
