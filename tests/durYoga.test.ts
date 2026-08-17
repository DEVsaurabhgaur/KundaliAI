import { describe, it, expect } from 'vitest';
import { checkKemadrumaYoga } from '../src/lib/yogas/durYoga';

describe('Kemadruma Yoga', () => {
  it('cancels Kemadruma when Moon is in Kendra', () => {
    expect(checkKemadrumaYoga(false, true)).toBe(false);
    expect(checkKemadrumaYoga(false, false)).toBe(true);
  });
});
