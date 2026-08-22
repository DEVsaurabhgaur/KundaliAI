import { describe, it, expect } from 'vitest';
import { evaluateVishadharaImpact } from '../src/lib/kalasarpa/vishadharaGlobalCommerce';

describe('Vishadhara Kala Sarpa', () => {
  it('identifies Vishadhara for Rahu in 11th house', () => {
    expect(evaluateVishadharaImpact(11)).toContain('Vishadhara');
  });
});
