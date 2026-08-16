import { describe, it, expect } from 'vitest';
import { calculatePranapada } from '../src/lib/career/pranapadaLagna';

describe('Pranapada Lagna', () => {
  it('computes vitality point from Sun', () => {
    const pp = calculatePranapada(0, 120);
    expect(pp).toBeDefined();
  });
});
