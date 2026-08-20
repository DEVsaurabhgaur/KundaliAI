import { describe, it, expect } from 'vitest';
import { getLuckyAttributes } from '../src/lib/numerology/luckyAttributes';

describe('Lucky Attributes', () => {
  it('returns Sun attributes for number 1', () => {
    const attr = getLuckyAttributes(1);
    expect(attr.planet).toBe('Sun');
    expect(attr.luckyGem).toBe('Ruby');
  });
});
