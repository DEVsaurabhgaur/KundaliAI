import { describe, it, expect } from 'vitest';
import { checkPushyaMahayoga } from '../src/lib/panchang/raviPushyaYoga';

describe('Pushya Mahayoga Checker', () => {
  it('identifies Sunday + Pushya as Ravi Pushya', () => {
    const res = checkPushyaMahayoga(0, 7);
    expect(res.isRaviPushya).toBe(true);
  });
});
