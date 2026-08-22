import { describe, it, expect } from 'vitest';
import { evaluateSolarEclipseRegime } from '../src/lib/medini/suryaGrahanaPolitical';

describe('Solar Eclipse Regime', () => {
  it('identifies diplomatic realignment for total eclipse', () => {
    expect(evaluateSolarEclipseRegime(true)).toContain('diplomatic realignment');
  });
});
