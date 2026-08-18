import { describe, it, expect } from 'vitest';
import { evaluateMoonRahuNadi } from '../src/lib/nadi/moonRahuNadi';

describe('Moon-Rahu Nadi', () => {
  it('describes trans-oceanic voyages and creative imagination', () => {
    expect(evaluateMoonRahuNadi()).toContain('trans-oceanic voyages');
  });
});
