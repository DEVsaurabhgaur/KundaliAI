import { describe, it, expect } from 'vitest';
import { checkGajakesariYoga } from '../src/lib/yogas/gajakesariYoga';

describe('Gajakesari Yoga', () => {
  it('confirms yoga when Jupiter is in 4th from Moon', () => {
    expect(checkGajakesariYoga(4)).toBe(true);
    expect(checkGajakesariYoga(3)).toBe(false);
  });
});
