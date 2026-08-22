import { describe, it, expect } from 'vitest';
import { getJeevaProtectionProtocol } from '../src/lib/kcd/kcdJeevaTransitProtection';

describe('KCD Jeeva Protection', () => {
  it('recommends Vishnu Sahasranama', () => {
    expect(getJeevaProtectionProtocol()).toContain('Vishnu Sahasranama');
  });
});
