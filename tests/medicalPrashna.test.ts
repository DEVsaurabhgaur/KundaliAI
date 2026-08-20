import { describe, it, expect } from 'vitest';
import { evaluateMedicalPrashna } from '../src/lib/prashna/medicalPrashna';

describe('Medical Prashna', () => {
  it('predicts swift recovery when lagna lord is strong and 8th is clean', () => {
    expect(evaluateMedicalPrashna(true, true).isQuickRecovery).toBe(true);
  });
});
