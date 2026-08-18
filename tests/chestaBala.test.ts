import { describe, it, expect } from 'vitest';
import { calculateChestaBala } from '../src/lib/shadbala/chestaBala';

describe('Chesta Bala', () => {
  it('gives 60 virupas for retrograde planets', () => {
    expect(calculateChestaBala(true, 1.0)).toBe(60);
  });
});
