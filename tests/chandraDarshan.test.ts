import { describe, it, expect } from 'vitest';
import { calculateChandraDarshan } from '../src/lib/panchang/chandraDarshan';

describe('Chandra Darshan Visibility', () => {
  it('validates crescent sighting above 10.5 degrees elongation', () => {
    expect(calculateChandraDarshan(12.0)).toBe(true);
    expect(calculateChandraDarshan(5.0)).toBe(false);
  });
});
