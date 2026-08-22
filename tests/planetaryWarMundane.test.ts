import { describe, it, expect } from 'vitest';
import { evaluatePlanetaryWarMarketEcho } from '../src/lib/medini/planetaryWarMundane';

describe('Planetary War Market Echo', () => {
  it('identifies economic volatility', () => {
    expect(evaluatePlanetaryWarMarketEcho('Mars', 'Saturn')).toContain('volatility');
  });
});
