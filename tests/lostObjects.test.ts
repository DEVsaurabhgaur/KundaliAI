import { describe, it, expect } from 'vitest';
import { findLostArticleDirection } from '../src/lib/prashna/lostObjects';

describe('Lost Objects Direction', () => {
  it('returns directional advice for query sign', () => {
    const dir = findLostArticleDirection('Aries');
    expect(dir).toContain('East');
  });
});
