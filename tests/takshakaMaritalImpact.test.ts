import { describe, it, expect } from 'vitest';
import { evaluateTakshakaImpact } from '../src/lib/kalasarpa/takshakaMaritalImpact';

describe('Takshaka Marital Impact', () => {
  it('identifies marital transformation for Rahu in 7th', () => {
    expect(evaluateTakshakaImpact(7)).toContain('Takshaka');
  });
});
