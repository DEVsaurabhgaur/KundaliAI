import { describe, it, expect } from 'vitest';
import { resolvePrashnaQuery } from '../src/lib/prashna/yesNoEngine';

describe('Prashna Yes/No Engine', () => {
  it('returns positive verdict when Ithasala is formed', () => {
    const result = resolvePrashnaQuery(true, true, true);
    expect(result.verdict).toContain('Yes');
  });
});
