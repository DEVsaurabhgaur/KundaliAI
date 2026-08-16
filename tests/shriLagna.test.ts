import { describe, it, expect } from 'vitest';
import { calculateShriLagna } from '../src/lib/career/shriLagna';

describe('Shri Lagna', () => {
  it('calculates prosperity degree', () => {
    const deg = calculateShriLagna(10, 20);
    expect(deg).toBe(30);
  });
});
