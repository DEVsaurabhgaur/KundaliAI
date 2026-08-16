import { describe, it, expect } from 'vitest';
import { evaluateTajikaAspect } from '../src/lib/prashna/tajikaAspects';

describe('Tajika Aspects', () => {
  it('identifies Ithasala yoga within 8 degrees orb', () => {
    const aspect = evaluateTajikaAspect(10, 15, true);
    expect(aspect.type).toContain('Ithasala');
  });
});
