import { describe, it, expect } from 'vitest';
import { getDreamFruitionTimeline } from '../src/lib/nimitta/svapnaVichara';

describe('Svapna Vichara', () => {
  it('predicts immediate 10-30 day fruition for dawn dreams (4th watch)', () => {
    expect(getDreamFruitionTimeline(4)).toContain('Immediate');
  });
});
