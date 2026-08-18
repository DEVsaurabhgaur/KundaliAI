import { describe, it, expect } from 'vitest';
import { getIthasalaSubType } from '../src/lib/tajika/ithasalaSubTypes';

describe('Ithasala Sub-Types', () => {
  it('identifies Purna Ithasala within 1 degree', () => {
    expect(getIthasalaSubType(0.5, 8.0)).toContain('Purna');
  });
});
