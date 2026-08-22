import { describe, it, expect } from 'vitest';
import { getKalaSarpaType } from '../src/lib/kalasarpa/kalaSarpa12Types';

describe('12 Kala Sarpa Types', () => {
  it('identifies Ananta for Rahu in 1st and Kulika for Rahu in 2nd', () => {
    expect(getKalaSarpaType(1)).toContain('Ananta');
    expect(getKalaSarpaType(2)).toContain('Kulika');
  });
});
