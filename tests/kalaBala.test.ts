import { describe, it, expect } from 'vitest';
import { calculateKalaBala } from '../src/lib/shadbala/kalaBala';

describe('Kala Bala', () => {
  it('allocates diurnal bonus to Sun for day birth', () => {
    expect(calculateKalaBala(true, true, 'Sun')).toBe(60);
  });
});
