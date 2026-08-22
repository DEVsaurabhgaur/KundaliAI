import { describe, it, expect } from 'vitest';
import { evaluateSarpaPrana } from '../src/lib/kalasarpa/sarpaDoshaPranaAffliction';

describe('Sarpa Prana Breathwork', () => {
  it('recommends Nadi Shodhana for active Sarpa Dosha', () => {
    expect(evaluateSarpaPrana(true).recommendedPranayama).toContain('Nadi Shodhana');
  });
});
