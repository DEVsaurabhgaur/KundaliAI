import { describe, it, expect } from 'vitest';
import { evaluateTajikaYogaName } from '../src/lib/tajika/tajikaYogas16';

describe('16 Tajika Yogas', () => {
  it('identifies Ithasala for applying aspects', () => {
    expect(evaluateTajikaYogaName(true, false, false)).toContain('Ithasala');
  });
});
