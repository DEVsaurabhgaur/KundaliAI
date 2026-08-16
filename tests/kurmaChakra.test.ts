import { describe, it, expect } from 'vitest';
import { getKurmaDirection } from '../src/lib/kurmaChakra';

describe('Kurma Chakra', () => {
  it('returns cardinal direction for nakshatra index', () => {
    const dir = getKurmaDirection(0);
    expect(dir).toBe('East');
  });
});
