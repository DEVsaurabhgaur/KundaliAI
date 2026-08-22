import { describe, it, expect } from 'vitest';
import { evaluatePartialKalaSarpa } from '../src/lib/kalasarpa/partialKalaSarpa';

describe('Partial Kala Sarpa', () => {
  it('identifies Anshik Kala Sarpa when 6 planets are inside axis', () => {
    expect(evaluatePartialKalaSarpa(6)).toContain('Anshik');
  });
});
