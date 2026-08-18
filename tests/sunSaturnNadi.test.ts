import { describe, it, expect } from 'vitest';
import { evaluateSunSaturnNadi } from '../src/lib/nadi/sunSaturnNadi';

describe('Sun-Saturn Nadi', () => {
  it('describes self-earned status and ancestral lessons', () => {
    expect(evaluateSunSaturnNadi()).toContain('self-earned sovereign status');
  });
});
