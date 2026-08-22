import { describe, it, expect } from 'vitest';
import { getSamvatsaraName } from '../src/lib/medini/samvatsara60Cycles';

describe('Samvatsara 60 Cycle', () => {
  it('returns Prabhava for 0 and Vibhava for 1', () => {
    expect(getSamvatsaraName(0)).toBe('Prabhava');
    expect(getSamvatsaraName(1)).toBe('Vibhava');
  });
});
