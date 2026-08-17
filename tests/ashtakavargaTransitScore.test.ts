import { describe, it, expect } from 'vitest';
import { getSAVTransitRating } from '../src/lib/gochara/ashtakavargaTransitScore';

describe('SAV Transit Rating', () => {
  it('rates 32 points as Highly Auspicious', () => {
    expect(getSAVTransitRating(32)).toContain('Highly Auspicious');
  });
});
