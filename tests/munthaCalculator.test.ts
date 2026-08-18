import { describe, it, expect } from 'vitest';
import { calculateMuntha } from '../src/lib/tajika/munthaCalculator';

describe('Muntha Calculator', () => {
  it('advances 1 sign per completed year', () => {
    const m = calculateMuntha(0, 25);
    expect(m.munthaSignIndex).toBe(1); // 25 % 12 = 1 (Taurus)
  });
});
