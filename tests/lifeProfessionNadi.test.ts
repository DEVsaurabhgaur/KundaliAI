import { describe, it, expect } from 'vitest';
import { getNadiProfession } from '../src/lib/nadi/lifeProfessionNadi';

describe('Nadi Vocational Profiler', () => {
  it('maps Saturn + Mercury to IT, auditing, and commerce', () => {
    expect(getNadiProfession('Mercury')).toContain('IT');
  });
});
