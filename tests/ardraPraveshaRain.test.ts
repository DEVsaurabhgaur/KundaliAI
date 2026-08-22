import { describe, it, expect } from 'vitest';
import { isArdraPraveshaActive } from '../src/lib/medini/ardraPraveshaRain';

describe('Ardra Pravesha Rain', () => {
  it('identifies Sun degree in Ardra nakshatra', () => {
    expect(isArdraPraveshaActive(72.0)).toBe(true);
    expect(isArdraPraveshaActive(60.0)).toBe(false);
  });
});
