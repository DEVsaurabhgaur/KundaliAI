import { describe, it, expect } from 'vitest';
import { evaluateKCDPakaBhoga } from '../src/lib/kcd/kcdPakaBhogaDasha';

describe('KCD Paka Bhoga', () => {
  it('computes Paka and Bhoga signs', () => {
    const res = evaluateKCDPakaBhoga(0, 4);
    expect(res.pakaSign).toBe(4);
  });
});
