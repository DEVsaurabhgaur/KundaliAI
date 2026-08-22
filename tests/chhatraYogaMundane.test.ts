import { describe, it, expect } from 'vitest';
import { evaluateChhatraYoga } from '../src/lib/medini/chhatraYogaMundane';

describe('Chhatra Yoga', () => {
  it('confirms sovereignty when benefics hold 10th and 1st', () => {
    expect(evaluateChhatraYoga(true)).toBe(true);
  });
});
