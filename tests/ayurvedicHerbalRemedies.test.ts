import { describe, it, expect } from 'vitest';
import { getHerbalRemedies } from '../src/lib/medical/ayurvedicHerbalRemedies';

describe('Ayurvedic Herbs', () => {
  it('returns Ashwagandha and Saffron for Sun', () => {
    expect(getHerbalRemedies('Sun')).toContain('Ashwagandha');
  });
});
