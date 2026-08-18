import { describe, it, expect } from 'vitest';
import { evaluateNadiConjunction } from '../src/lib/nadi/karmicConjunctions';

describe('Nadi Conjunctions', () => {
  it('identifies Dharma-Karmadhipati for Jupiter-Saturn', () => {
    expect(evaluateNadiConjunction('Jupiter', 'Saturn')).toContain('Dharma-Karma');
  });
});
