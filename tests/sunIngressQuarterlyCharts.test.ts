import { describe, it, expect } from 'vitest';
import { getIngressQuarter } from '../src/lib/medini/sunIngressQuarterlyCharts';

describe('Solar Ingress Quarters', () => {
  it('identifies Mesha Sankranti for sign 0 and Makara for sign 9', () => {
    expect(getIngressQuarter(0)).toContain('Mesha');
    expect(getIngressQuarter(9)).toContain('Makara');
  });
});
