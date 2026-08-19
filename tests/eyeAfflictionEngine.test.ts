import { describe, it, expect } from 'vitest';
import { evaluateEyeHealth } from '../src/lib/medical/eyeAfflictionEngine';

describe('Eye Health Evaluator', () => {
  it('flags right eye vulnerability when 2nd house is afflicted', () => {
    const res = evaluateEyeHealth(true, false);
    expect(res.rightEyeVulnerable).toBe(true);
  });
});
