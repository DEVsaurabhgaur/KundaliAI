import { describe, it, expect } from 'vitest';
import { evaluateKaryaSiddhi } from '../src/lib/prashna/karyaSiddhi';

describe('Karya Siddhi', () => {
  it('returns Purna Siddhi for favorable Ithasala and Moon', () => {
    expect(evaluateKaryaSiddhi(true, true, true)).toContain('Purna');
  });
});
