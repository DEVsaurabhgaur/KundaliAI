import { describe, it, expect } from 'vitest';
import { isKutilaMotion } from '../src/lib/speed/kutilaSpeedRules';

describe('Kutila Motion', () => {
  it('flags sharp daily speed fluctuations', () => {
    expect(isKutilaMotion(0.5, 0.8)).toBe(true);
  });
});
