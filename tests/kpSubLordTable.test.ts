import { describe, it, expect } from 'vitest';
import { generateKP249Table } from '../src/lib/kp/kpSubLordTable';

describe('KP 249 Sub-Lord Table', () => {
  it('generates 249 entries', () => {
    const table = generateKP249Table();
    expect(table).toHaveLength(249);
  });
});
