import { describe, it, expect } from 'vitest';
import { checkTaraShuddhi } from '../src/lib/muhurta/taraShuddhi';

describe('Tara Shuddhi', () => {
  it('confirms purity when neither Jupiter nor Venus is combust', () => {
    expect(checkTaraShuddhi(false, false)).toBe(true);
    expect(checkTaraShuddhi(true, false)).toBe(false);
  });
});
