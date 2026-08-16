import { describe, it, expect } from 'vitest';
import { getLalKitabRemedy } from '../src/lib/lalkitab/lalkitabRemedies';

describe('Lal Kitab Remedies', () => {
  it('provides safe symbolic action for Sun in 6th', () => {
    const remedy = getLalKitabRemedy('Sun', 6);
    expect(remedy).toContain('Feed jaggery');
  });
});
