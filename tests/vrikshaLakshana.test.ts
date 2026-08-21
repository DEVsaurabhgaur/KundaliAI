import { describe, it, expect } from 'vitest';
import { evaluateTreeFlowering } from '../src/lib/nimitta/vrikshaLakshana';

describe('Vriksha Lakshana', () => {
  it('identifies Utpata Nimitta for unseasonal blooms', () => {
    expect(evaluateTreeFlowering(true)).toContain('Utpata');
  });
});
