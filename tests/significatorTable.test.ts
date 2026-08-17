import { describe, it, expect } from 'vitest';
import { generateSignificatorRow } from '../src/lib/kp/significatorTable';

describe('KP Significator Table', () => {
  it('creates level A, B, C, D row for house', () => {
    const row = generateSignificatorRow(10, ['Sun'], ['Mars'], ['Jupiter'], ['Saturn']);
    expect(row.levelA).toContain('Sun');
    expect(row.houseNumber).toBe(10);
  });
});
