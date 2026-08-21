import { describe, it, expect } from 'vitest';
import { evaluateBellResonance } from '../src/lib/nimitta/ghantiLakshana';

describe('Ghanti Lakshana', () => {
  it('identifies Divya Dhwani when bell is heard during query', () => {
    expect(evaluateBellResonance(true)).toContain('Divya Dhwani');
  });
});
