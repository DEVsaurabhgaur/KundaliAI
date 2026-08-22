import { describe, it, expect } from 'vitest';
import { evaluateKulikaImpact } from '../src/lib/kalasarpa/kulikaFinancialImpact';

describe('Kulika Kala Sarpa', () => {
  it('identifies Kulika for Rahu in 2nd house', () => {
    expect(evaluateKulikaImpact(2)).toContain('Kulika');
  });
});
