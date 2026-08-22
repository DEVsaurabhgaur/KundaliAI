import { describe, it, expect } from 'vitest';
import { evaluateShankhachudaImpact } from '../src/lib/kalasarpa/shankhachudaDharmaTriumph';

describe('Shankhachuda Kala Sarpa', () => {
  it('identifies Shankhachuda for Rahu in 9th house', () => {
    expect(evaluateShankhachudaImpact(9)).toContain('Shankhachuda');
  });
});
