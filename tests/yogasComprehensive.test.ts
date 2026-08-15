import { describe, it, expect } from 'vitest';
import { checkMahapurushaYoga } from '../src/lib/mahapurushaYogas';

describe('Mahapurusha Yogas Evaluator', () => {
  it('identifies Hamsa Yoga when Jupiter is exalted in Kendra', () => {
    const result = checkMahapurushaYoga('Jupiter', 1, true);
    expect(result).not.toBeNull();
    expect(result?.name).toBe('Hamsa Yoga');
  });
});
