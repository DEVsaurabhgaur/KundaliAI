import { describe, it, expect } from 'vitest';
import { getSarpaShantiDetails } from '../src/lib/kalasarpa/sarpaShantiMantras';

describe('Sarpa Shanti Mantras', () => {
  it('allocates 18000 japas to Ananta', () => {
    expect(getSarpaShantiDetails('Ananta').count).toBe(18000);
  });
});
