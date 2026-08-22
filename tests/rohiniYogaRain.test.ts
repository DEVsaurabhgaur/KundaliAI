import { describe, it, expect } from 'vitest';
import { evaluateRohiniYoga } from '../src/lib/medini/rohiniYogaRain';

describe('Rohini Yoga Rain', () => {
  it('predicts bountiful monsoon with cloudy skies and East winds', () => {
    expect(evaluateRohiniYoga(true, 'East')).toContain('Bountiful Monsoon');
  });
});
