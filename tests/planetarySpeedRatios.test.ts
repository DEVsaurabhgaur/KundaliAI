import { describe, it, expect } from 'vitest';
import { categorizePlanetarySpeed } from '../src/lib/speed/planetarySpeedRatios';

describe('Planetary Speed Categories', () => {
  it('identifies Vakra for negative speed and Sheeghra for fast motion', () => {
    expect(categorizePlanetarySpeed(-0.05, 0.5)).toContain('Vakra');
    expect(categorizePlanetarySpeed(1.2, 0.98)).toContain('Sheeghra');
  });
});
