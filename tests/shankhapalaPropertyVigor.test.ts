import { describe, it, expect } from 'vitest';
import { evaluateShankhapalaImpact } from '../src/lib/kalasarpa/shankhapalaPropertyVigor';

describe('Shankhapala Kala Sarpa', () => {
  it('identifies Shankhapala for Rahu in 4th house', () => {
    expect(evaluateShankhapalaImpact(4)).toContain('Shankhapala');
  });
});
