import { describe, it, expect } from 'vitest';
import { getRudrakshaDetails } from '../src/lib/remedies/rudrakshaMatrix';

describe('Rudraksha Matrix', () => {
  it('maps 1 Mukhi to Sun and Lord Shiva', () => {
    const r = getRudrakshaDetails(1);
    expect(r.planet).toBe('Sun');
    expect(r.deity).toBe('Shiva');
  });
});
