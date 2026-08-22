import { describe, it, expect } from 'vitest';
import { evaluateGhatakaImpact } from '../src/lib/kalasarpa/ghatakaAdministrativePrestige';

describe('Ghataka Kala Sarpa', () => {
  it('identifies Ghataka for Rahu in 10th house', () => {
    expect(evaluateGhatakaImpact(10)).toContain('Ghataka');
  });
});
