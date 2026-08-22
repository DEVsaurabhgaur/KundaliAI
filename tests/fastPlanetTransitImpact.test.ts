import { describe, it, expect } from 'vitest';
import { evaluateAtisheeghraImpact } from '../src/lib/speed/fastPlanetTransitImpact';

describe('Atisheeghra Impact', () => {
  it('identifies accelerated manifestation', () => {
    expect(evaluateAtisheeghraImpact(true)).toContain('Accelerated');
  });
});
