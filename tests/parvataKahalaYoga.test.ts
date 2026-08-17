import { describe, it, expect } from 'vitest';
import { evaluateParvataAndKahala } from '../src/lib/yogas/parvataKahalaYoga';

describe('Parvata and Kahala Yogas', () => {
  it('evaluates both yogas correctly', () => {
    const res = evaluateParvataAndKahala(true, true);
    expect(res.hasParvataYoga).toBe(true);
    expect(res.hasKahalaYoga).toBe(true);
  });
});
