import { describe, it, expect } from 'vitest';
import { calculateBhriguBindu } from '../src/lib/career/bhriguBindu';

describe('Bhrigu Bindu', () => {
  it('calculates midpoint between Moon and Rahu', () => {
    const bindu = calculateBhriguBindu(10, 50);
    expect(bindu).toBe(30);
  });
});
