import { describe, it, expect } from 'vitest';
import { calculateDigBala } from '../src/lib/shadbala/digBala';

describe('Dig Bala', () => {
  it('gives full 60 virupas at peak directional house', () => {
    expect(calculateDigBala('Jupiter', 0)).toBe(60);
    expect(calculateDigBala('Saturn', 180)).toBe(60);
  });
});
