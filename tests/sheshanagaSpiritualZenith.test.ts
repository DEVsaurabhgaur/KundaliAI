import { describe, it, expect } from 'vitest';
import { evaluateSheshanagaImpact } from '../src/lib/kalasarpa/sheshanagaSpiritualZenith';

describe('Sheshanaga Kala Sarpa', () => {
  it('identifies Sheshanaga for Rahu in 12th house', () => {
    expect(evaluateSheshanagaImpact(12)).toContain('Sheshanaga');
  });
});
