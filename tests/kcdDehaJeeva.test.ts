import { describe, it, expect } from 'vitest';
import { getKCDDehaJeeva } from '../src/lib/kcd/kcdDehaJeeva';

describe('KCD Deha Jeeva', () => {
  it('maps Deha and Jeeva signs', () => {
    const res = getKCDDehaJeeva(true, 0);
    expect(res.dehaSignIndex).toBe(0);
    expect(res.jeevaSignIndex).toBe(8);
  });
});
