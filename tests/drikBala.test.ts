import { describe, it, expect } from 'vitest';
import { calculateDrikBala } from '../src/lib/shadbala/drikBala';

describe('Drik Bala', () => {
  it('subtracts malefic aspect rays from benefic aspect rays', () => {
    expect(calculateDrikBala(25, 10)).toBe(15);
  });
});
