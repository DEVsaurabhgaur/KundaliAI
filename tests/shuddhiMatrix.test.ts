import { describe, it, expect } from 'vitest';
import { verifySixFoldShuddhi } from '../src/lib/muhurta/shuddhiMatrix';

describe('6-Fold Shuddhi Matrix', () => {
  it('rates perfect 6/6 as Supreme Shuddhi', () => {
    const res = verifySixFoldShuddhi(true, true, true, true, true, true);
    expect(res.score).toBe(6);
    expect(res.isFullyPure).toBe(true);
  });
});
