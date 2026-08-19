import { describe, it, expect } from 'vitest';
import { getBadhakaHouse } from '../src/lib/medical/badhakaHouses';

describe('Badhaka Houses', () => {
  it('assigns 11th to Movable (Aries) and 9th to Fixed (Taurus)', () => {
    expect(getBadhakaHouse(0)).toBe(11);
    expect(getBadhakaHouse(1)).toBe(9);
    expect(getBadhakaHouse(2)).toBe(7);
  });
});
