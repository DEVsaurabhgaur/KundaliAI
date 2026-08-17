import { describe, it, expect } from 'vitest';
import { calculatePlacidusCuspArc } from '../src/lib/kp/kpPlacidusCusps';

describe('Placidus Cusp Helper', () => {
  it('calculates semi-arc value', () => {
    const arc = calculatePlacidusCuspArc(23.44, 28.61, 100);
    expect(arc).toBeGreaterThan(100);
  });
});
