import { describe, it, expect } from 'vitest';
import { evaluateSaturnTransit } from '../src/lib/gochara/sadeSatiPhases';

describe('Sade Sati Phase Engine', () => {
  it('identifies Peak Phase when transit Saturn is in same sign as Moon', () => {
    const status = evaluateSaturnTransit(0, 0);
    expect(status.phase).toBe('Phase 2 (Peak)');
    expect(status.isSadeSatiActive).toBe(true);
  });
});
