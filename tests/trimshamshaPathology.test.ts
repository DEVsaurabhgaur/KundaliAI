import { describe, it, expect } from 'vitest';
import { evaluateTrimshamsha } from '../src/lib/drekkana/trimshamshaPathology';

describe('Trimshamsha Pathology', () => {
  it('returns courage for Mars and wisdom for Jupiter', () => {
    expect(evaluateTrimshamsha('Mars')).toContain('courage');
    expect(evaluateTrimshamsha('Jupiter')).toContain('morality');
  });
});
