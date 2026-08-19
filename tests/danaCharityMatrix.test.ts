import { describe, it, expect } from 'vitest';
import { getDanaGuidelines } from '../src/lib/remedies/danaCharityMatrix';

describe('Navagraha Dana', () => {
  it('recommends Sunday charity of wheat and copper for Sun', () => {
    expect(getDanaGuidelines('Sun').weekday).toBe('Sunday');
  });
});
