import { describe, it, expect } from 'vitest';
import { evaluateSaturnRahuNadi } from '../src/lib/nadi/saturnRahuNadi';

describe('Saturn-Rahu Nadi', () => {
  it('describes technology and foreign career trajectories', () => {
    expect(evaluateSaturnRahuNadi()).toContain('high-technology');
  });
});
