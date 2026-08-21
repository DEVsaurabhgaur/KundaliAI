import { describe, it, expect } from 'vitest';
import { evaluateSoilPitTest } from '../src/lib/nimitta/bhumiLakshana';

describe('Bhumi Lakshana Pit Test', () => {
  it('identifies Uttama Bhumi when water is retained', () => {
    expect(evaluateSoilPitTest(true).isSupremeLand).toBe(true);
  });
});
