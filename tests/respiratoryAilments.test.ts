import { describe, it, expect } from 'vitest';
import { checkRespiratoryVulnerability } from '../src/lib/medical/respiratoryAilments';

describe('Respiratory Health', () => {
  it('flags vulnerability when 3rd house and Mercury/Moon are afflicted', () => {
    expect(checkRespiratoryVulnerability(true, true)).toBe(true);
  });
});
