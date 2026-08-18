import { describe, it, expect } from 'vitest';
import { checkKrantiSamya } from '../src/lib/muhurta/krantiSamya';

describe('Kranti Samya Mahapata', () => {
  it('detects declination parity within 0.25 degrees', () => {
    expect(checkKrantiSamya(23.4, -23.45)).toBe(true);
    expect(checkKrantiSamya(23.4, -10.0)).toBe(false);
  });
});
