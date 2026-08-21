import { describe, it, expect } from 'vitest';
import { evaluateCelestialOmen } from '../src/lib/nimitta/akashaLakshana';

describe('Akasha Lakshana', () => {
  it('identifies Mahodaya for solar halo', () => {
    expect(evaluateCelestialOmen(true, false).omen).toContain('Mahodaya');
  });
});
