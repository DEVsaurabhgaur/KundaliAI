import { describe, it, expect } from 'vitest';
import { evaluateDigestiveAgni } from '../src/lib/medical/digestiveVulnerabilities';

describe('Digestive Agni Evaluator', () => {
  it('identifies Mandagni when 5th house and Mars are afflicted', () => {
    expect(evaluateDigestiveAgni(true, true)).toContain('Mandagni');
  });
});
