import { describe, it, expect } from 'vitest';
import { checkMasterNumber } from '../src/lib/numerology/masterNumbers';

describe('Master Numbers', () => {
  it('identifies 11 as Master Number', () => {
    expect(checkMasterNumber(11).isMaster).toBe(true);
  });
});
