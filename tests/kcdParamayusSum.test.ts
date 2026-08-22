import { describe, it, expect } from 'vitest';
import { getParamayusCycle } from '../src/lib/kcd/kcdParamayusSum';

describe('KCD Paramayus', () => {
  it('returns 100 for Savya and 86 for Apasavya', () => {
    expect(getParamayusCycle(true)).toBe(100);
    expect(getParamayusCycle(false)).toBe(86);
  });
});
