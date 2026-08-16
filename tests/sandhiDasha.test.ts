import { describe, it, expect } from 'vitest';
import { checkDashaSandhi } from '../src/lib/dasha/sandhiDasha';

describe('Dasha Sandhi Detector', () => {
  it('detects active sandhi within 6 months remaining', () => {
    const result = checkDashaSandhi(4);
    expect(result.isDashaSandhi).toBe(true);
  });
});
