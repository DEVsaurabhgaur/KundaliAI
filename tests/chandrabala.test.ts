import { describe, it, expect } from 'vitest';
import { calculateChandrabala } from '../src/lib/panchang/chandrabala';

describe('Chandrabala Engine', () => {
  it('validates 11th house from Moon as favorable Chandrabala', () => {
    expect(calculateChandrabala(0, 10)).toBe(true);
    expect(calculateChandrabala(0, 7)).toBe(false); // 8th house
  });
});
