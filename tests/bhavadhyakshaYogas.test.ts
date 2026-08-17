import { describe, it, expect } from 'vitest';
import { evaluateBhavadhyaksha } from '../src/lib/yogas/bhavadhyakshaYogas';

describe('Bhavadhyaksha Yogas', () => {
  it('identifies Chamara Yoga for exalted 1st lord in Kendra', () => {
    expect(evaluateBhavadhyaksha(1, true)).toContain('Chamara');
  });
});
