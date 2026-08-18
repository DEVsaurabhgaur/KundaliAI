import { describe, it, expect } from 'vitest';
import { isVishaGhatiActive } from '../src/lib/muhurta/vishaGhatiCalculator';

describe('Visha Ghati Calculator', () => {
  it('flags toxic span within 4 ghatis of start', () => {
    expect(isVishaGhatiActive(32, 30)).toBe(true);
    expect(isVishaGhatiActive(40, 30)).toBe(false);
  });
});
