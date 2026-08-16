import { describe, it, expect } from 'vitest';
import { validateBrahmasthanSanctity } from '../src/lib/vastu/brahmasthan';

describe('Brahmasthan Sanctity', () => {
  it('validates free and open center', () => {
    const result = validateBrahmasthanSanctity(false, false);
    expect(result.isBrahmasthanPure).toBe(true);
  });
});
