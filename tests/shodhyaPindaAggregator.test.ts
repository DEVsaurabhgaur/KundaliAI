import { describe, it, expect } from 'vitest';
import { calculateShodhyaPinda } from '../src/lib/pinda/shodhyaPindaAggregator';

describe('Shodhya Pinda Aggregator', () => {
  it('sums Rashi Pinda and Graha Pinda', () => {
    expect(calculateShodhyaPinda(100, 50)).toBe(150);
  });
});
