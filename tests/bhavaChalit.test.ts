import { describe, it, expect } from 'vitest';
import { calculateBhavaChalit } from '../src/lib/bhavaChalit';

describe('Bhava Chalit Chart Engine', () => {
  it('computes planetary occupancy across sandhis', () => {
    const planets = [{ name: 'Sun', longitude: 10 }];
    const result = calculateBhavaChalit(0, planets);
    expect(result[0].chalitHouse).toBe(1);
  });
});
