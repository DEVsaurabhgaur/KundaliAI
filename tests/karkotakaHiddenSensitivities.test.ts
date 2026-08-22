import { describe, it, expect } from 'vitest';
import { evaluateKarkotakaImpact } from '../src/lib/kalasarpa/karkotakaHiddenSensitivities';

describe('Karkotaka Kala Sarpa', () => {
  it('identifies Karkotaka for Rahu in 8th house', () => {
    expect(evaluateKarkotakaImpact(8)).toContain('Karkotaka');
  });
});
