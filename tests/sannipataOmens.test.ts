import { describe, it, expect } from 'vitest';
import { evaluateSannipata } from '../src/lib/medini/sannipataOmens';

describe('Sannipata Omens', () => {
  it('flags turbulence when 5 or more planets cluster in one sign', () => {
    expect(evaluateSannipata(5)).toBe(true);
    expect(evaluateSannipata(3)).toBe(false);
  });
});
