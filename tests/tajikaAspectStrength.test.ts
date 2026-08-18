import { describe, it, expect } from 'vitest';
import { getTajikaAspectStrength } from '../src/lib/tajika/tajikaAspectStrength';

describe('Tajika Aspect Strength', () => {
  it('identifies trinal aspects as Very Friendly & Fruitful', () => {
    expect(getTajikaAspectStrength(5)).toContain('Friendly');
  });
});
