import { describe, it, expect } from 'vitest';
import { getSwamshaVocation } from '../src/lib/jaimini/swamshaAnalysis';

describe('Swamsha Analysis', () => {
  it('returns vocation for Aries swamsha', () => {
    expect(getSwamshaVocation('Aries')).toContain('Pioneer');
  });
});
