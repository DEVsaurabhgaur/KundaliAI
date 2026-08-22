import { describe, it, expect } from 'vitest';
import { isMandukaJump } from '../src/lib/kcd/kcdMandukaFinancialGains';

describe('Manduka Jump', () => {
  it('detects 2-sign skip jump', () => {
    expect(isMandukaJump(0, 2)).toBe(true);
  });
});
