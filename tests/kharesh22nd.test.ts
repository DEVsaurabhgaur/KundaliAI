import { describe, it, expect } from 'vitest';
import { calculateKhareshLord } from '../src/lib/drekkana/kharesh22nd';

describe('22nd Kharesh', () => {
  it('calculates 8th house in D-3', () => {
    expect(calculateKhareshLord(0)).toBe(7);
  });
});
