import { describe, it, expect } from 'vitest';
import { calculateGhatikaLagna } from '../src/lib/jaimini/ghatikaLagna';

describe('Ghatika Lagna (GL)', () => {
  it('advances 30 degrees per Ghati (24 mins)', () => {
    const gl = calculateGhatikaLagna(0, 24);
    expect(gl).toBe(30);
  });
});
