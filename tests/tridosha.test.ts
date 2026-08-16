import { describe, it, expect } from 'vitest';
import { calculateTridoshaProfile } from '../src/lib/ayurjyotish/tridosha';

describe('Tridosha Profile Calculator', () => {
  it('calculates bio-energy balance', () => {
    const profile = calculateTridoshaProfile({});
    expect(profile.dominantDosha).toBeDefined();
  });
});
