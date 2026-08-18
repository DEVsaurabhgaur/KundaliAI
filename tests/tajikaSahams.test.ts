import { describe, it, expect } from 'vitest';
import { calculateSaham } from '../src/lib/tajika/tajikaSahams';

describe('Tajika Sahams', () => {
  it('calculates Punya Saham for day birth', () => {
    const saham = calculateSaham(60, 0, 10, true);
    expect(saham).toBe(70);
  });
});
