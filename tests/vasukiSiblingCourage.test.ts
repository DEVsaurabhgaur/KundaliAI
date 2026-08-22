import { describe, it, expect } from 'vitest';
import { evaluateVasukiImpact } from '../src/lib/kalasarpa/vasukiSiblingCourage';

describe('Vasuki Kala Sarpa', () => {
  it('identifies Vasuki for Rahu in 3rd house', () => {
    expect(evaluateVasukiImpact(3)).toContain('Vasuki');
  });
});
