import { describe, it, expect } from 'vitest';
import { evaluateSimhavalokanaPeriod } from '../src/lib/kcd/kcdSimhavalokanaKarma';

describe('Simhavalokana Karma', () => {
  it('detects Pisces to Scorpio jump', () => {
    expect(evaluateSimhavalokanaPeriod(11, 7)).toBe(true);
  });
});
