import { describe, it, expect } from 'vitest';
import { checkJaiminiRajaYoga } from '../src/lib/jaimini/jaiminiYogas';

describe('Jaimini Raja Yoga', () => {
  it('detects Raja yoga when AK and PK conjoin', () => {
    const res = checkJaiminiRajaYoga(true, false);
    expect(res.hasJaiminiRajaYoga).toBe(true);
  });
});
