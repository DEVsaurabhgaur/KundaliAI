import { describe, it, expect } from 'vitest';
import { isTransitObstructedByVedha } from '../src/lib/gochara/gocharaVedha';

describe('Gochara Vedha', () => {
  it('detects obstruction when corresponding Vedha house has occupants', () => {
    expect(isTransitObstructedByVedha(3, 1)).toBe(true);
    expect(isTransitObstructedByVedha(3, 0)).toBe(false);
  });
});
