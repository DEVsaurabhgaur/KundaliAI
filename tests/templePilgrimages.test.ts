import { describe, it, expect } from 'vitest';
import { getTempleForPlanet } from '../src/lib/remedies/templePilgrimages';

describe('Navagraha Pilgrimages', () => {
  it('maps Sun to Suryanar Kovil / Konark', () => {
    expect(getTempleForPlanet('Sun')).toContain('Suryanar');
  });
});
