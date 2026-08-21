import { describe, it, expect } from 'vitest';
import { evaluateMatruRin } from '../src/lib/lalkitab/rinMatruRemedies';

describe('Matru Rin', () => {
  it('flags maternal debt when 4th house is afflicted', () => {
    expect(evaluateMatruRin(true).hasMatruRin).toBe(true);
  });
});
