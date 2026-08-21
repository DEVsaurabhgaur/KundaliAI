import { describe, it, expect } from 'vitest';
import { evaluatePitruRin } from '../src/lib/lalkitab/rinPitruRemedies';

describe('Pitru Rin', () => {
  it('flags ancestral debt when 9th house is afflicted', () => {
    expect(evaluatePitruRin(true).hasPitruRin).toBe(true);
  });
});
