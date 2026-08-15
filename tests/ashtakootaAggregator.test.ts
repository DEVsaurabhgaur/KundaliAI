import { describe, it, expect } from 'vitest';
import { computeAshtakootaMatch } from '../src/lib/ashtakootaAggregator';

describe('36-Guna Matchmaking Aggregator', () => {
  it('calculates total score between compatible signs', () => {
    const scorecard = computeAshtakootaMatch(0, 4, 0, 12);
    expect(scorecard.totalScore).toBeGreaterThan(0);
    expect(scorecard.maxScore).toBe(36);
  });
});
