import { describe, it, expect } from 'vitest';
import { hasKudaratiMadad } from '../src/lib/lalkitab/kudaratiMadad';

describe('Kudarati Madad', () => {
  it('confirms natural assistance in trinal houses (1, 5, 9)', () => {
    expect(hasKudaratiMadad(1, 5)).toBe(true);
    expect(hasKudaratiMadad(1, 9)).toBe(true);
  });
});
