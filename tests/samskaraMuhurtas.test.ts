import { describe, it, expect } from 'vitest';
import { getSamskaraGuidelines, VEDIC_SAMSKARAS } from '../src/lib/muhurta/samskaraMuhurtas';

describe('16 Samskaras Muhurta', () => {
  it('contains 16 rites and gives Vivaha guidelines', () => {
    expect(VEDIC_SAMSKARAS).toHaveLength(16);
    expect(getSamskaraGuidelines('Vivaha')).toContain('Tara Shuddhi');
  });
});
