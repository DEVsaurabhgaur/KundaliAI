import { describe, it, expect } from 'vitest';
import { evaluateSolarFleet } from '../src/lib/yogas/solarFleetYogas';

describe('Solar Fleet Yogas', () => {
  it('identifies Ubhayachari Yoga when planets flank both sides of Sun', () => {
    expect(evaluateSolarFleet(true, true)).toBe('Ubhayachari Yoga');
  });
});
