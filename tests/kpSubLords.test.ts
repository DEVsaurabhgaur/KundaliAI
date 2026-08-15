import { describe, it, expect } from 'vitest';
import { calculateKpSubLord } from '../src/lib/kpSubLords';

describe('KP Sub-Lord Algorithm', () => {
  it('returns valid sign lord and star lord for 0 degrees Aries', () => {
    const result = calculateKpSubLord(0);
    expect(result.signLord).toBe('Mars');
    expect(result.starLord).toBe('Ketu');
  });
});
