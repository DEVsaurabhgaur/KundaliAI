import { describe, it, expect } from 'vitest';
import { isDagdhaTithi } from '../src/lib/muhurta/dagdhaTithi';

describe('Dagdha Tithi Check', () => {
  it('flags 12th tithi as Dagdha on Sunday', () => {
    expect(isDagdhaTithi(0, 12)).toBe(true);
    expect(isDagdhaTithi(0, 5)).toBe(false);
  });
});
