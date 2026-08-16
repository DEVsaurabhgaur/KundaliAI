import { describe, it, expect } from 'vitest';
import { LAL_KITAB_DEBTS } from '../src/lib/lalkitab/karmicDebts';

describe('Lal Kitab Debts Repository', () => {
  it('retrieves remedy for Pitru Rin', () => {
    const debt = LAL_KITAB_DEBTS['PitruRin'];
    expect(debt.remedy).toContain('charity');
  });
});
