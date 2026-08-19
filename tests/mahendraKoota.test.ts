import { describe, it, expect } from 'vitest';
import { checkMahendraKoota } from '../src/lib/synastry/mahendraKoota';

describe('Mahendra Koota', () => {
  it('validates 4th, 7th, 10th count as favorable', () => {
    expect(checkMahendraKoota(0, 3)).toBe(true); // 4th star
  });
});
