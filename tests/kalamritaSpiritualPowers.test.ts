import { describe, it, expect } from 'vitest';
import { evaluateKalamritaPowers } from '../src/lib/kalasarpa/kalamritaSpiritualPowers';

describe('Kalamrita Powers', () => {
  it('identifies occult intuition in Apasavya direction', () => {
    expect(evaluateKalamritaPowers(true)).toContain('Kalamrita Mastery');
  });
});
