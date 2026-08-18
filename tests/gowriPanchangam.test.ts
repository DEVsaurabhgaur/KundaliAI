import { describe, it, expect } from 'vitest';
import { isGowriAuspicious } from '../src/lib/muhurta/gowriPanchangam';

describe('Gowri Panchangam', () => {
  it('identifies Amirtham as auspicious', () => {
    expect(isGowriAuspicious('Amirtham')).toBe(true);
    expect(isGowriAuspicious('Visham')).toBe(false);
  });
});
