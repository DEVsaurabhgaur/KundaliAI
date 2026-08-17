import { describe, it, expect } from 'vitest';
import { getRulingPlanets } from '../src/lib/kp/rulingPlanets';

describe('KP Ruling Planets', () => {
  it('returns valid 5 RP indicators', () => {
    const rp = getRulingPlanets('Sun', 'Mars', 'Jupiter', 'Mercury', 'Venus');
    expect(rp.dayLord).toBe('Sun');
  });
});
