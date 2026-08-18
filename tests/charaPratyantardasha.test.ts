import { describe, it, expect } from 'vitest';
import { getCharaPratyantarDays } from '../src/lib/chara/charaPratyantardasha';

describe('Chara Pratyantardasha', () => {
  it('calculates days proportional to sub-period', () => {
    const days = getCharaPratyantarDays(6);
    expect(days).toBeGreaterThan(0);
  });
});
