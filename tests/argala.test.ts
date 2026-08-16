import { describe, it, expect } from 'vitest';
import { calculateArgala } from '../src/lib/career/argala';

describe('Jaimini Argala Engine', () => {
  it('computes Dhana and Sukha argalas', () => {
    const argala = calculateArgala({ 2: 1, 12: 0, 4: 2, 10: 1 });
    expect(argala.hasDhanaArgala).toBe(true);
    expect(argala.hasSukhaArgala).toBe(true);
  });
});
