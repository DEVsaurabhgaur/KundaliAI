import { describe, it, expect } from 'vitest';
import { evaluateMahapadmaImpact } from '../src/lib/kalasarpa/mahapadmaForeignGains';

describe('Mahapadma Kala Sarpa', () => {
  it('identifies Mahapadma for Rahu in 6th house', () => {
    expect(evaluateMahapadmaImpact(6)).toContain('Mahapadma');
  });
});
