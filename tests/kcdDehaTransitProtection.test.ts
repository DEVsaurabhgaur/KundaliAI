import { describe, it, expect } from 'vitest';
import { getDehaProtectionProtocol } from '../src/lib/kcd/kcdDehaTransitProtection';

describe('KCD Deha Protection', () => {
  it('recommends Maha Mrityunjaya japa', () => {
    expect(getDehaProtectionProtocol()).toContain('Mrityunjaya');
  });
});
