import { describe, it, expect } from 'vitest';
import { PLANET_AILMENTS } from '../src/lib/ayurjyotish/planetaryAilments';

describe('Planetary Ailments', () => {
  it('lists cardiac and eye vulnerabilities for Sun', () => {
    expect(PLANET_AILMENTS['Sun']).toContain('Cardiac issues');
  });
});
