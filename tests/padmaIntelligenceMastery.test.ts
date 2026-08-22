import { describe, it, expect } from 'vitest';
import { evaluatePadmaImpact } from '../src/lib/kalasarpa/padmaIntelligenceMastery';

describe('Padma Kala Sarpa', () => {
  it('identifies Padma for Rahu in 5th house', () => {
    expect(evaluatePadmaImpact(5)).toContain('Padma');
  });
});
