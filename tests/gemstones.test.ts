import { describe, it, expect } from 'vitest';
import { recommendGemstones } from '../src/lib/gemstones';

describe('Gemstone Recommendation Engine', () => {
  it('recommends Ruby for Sun and Yellow Sapphire for Jupiter', () => {
    const gems = recommendGemstones(['Sun', 'Jupiter']);
    expect(gems).toHaveLength(2);
    expect(gems[0].primaryGem).toBe('Ruby');
    expect(gems[1].primaryGem).toBe('Yellow Sapphire');
  });
});
