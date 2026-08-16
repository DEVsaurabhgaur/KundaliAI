import { describe, it, expect } from 'vitest';
import { calculateKalachakraPoints } from '../src/lib/dasha/kalachakraDasha';

describe('Kalachakra Dasha Points', () => {
  it('identifies Deha and Jeeva rashis correctly', () => {
    const info = calculateKalachakraPoints(0, 1);
    expect(info.dehaRashi).toBeDefined();
    expect(info.jeevaRashi).toBeDefined();
  });
});
