import { describe, it, expect } from 'vitest';
import { evaluateVipareetaRajaYogas } from '../src/lib/yogas/vipareetaRajaYogas';

describe('Vipareeta Raja Yogas', () => {
  it('identifies Harsha Yoga when 6th lord is in 6/8/12', () => {
    const res = evaluateVipareetaRajaYogas(true, false, false);
    expect(res.hasHarshaYoga).toBe(true);
  });
});
