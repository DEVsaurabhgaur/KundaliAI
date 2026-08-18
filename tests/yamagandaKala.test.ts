import { describe, it, expect } from 'vitest';
import { getYamagandaSegment } from '../src/lib/muhurta/yamagandaKala';

describe('Yamaganda Kala', () => {
  it('assigns 5th segment on Sunday and 1st on Thursday', () => {
    expect(getYamagandaSegment(0)).toBe(5);
    expect(getYamagandaSegment(4)).toBe(1);
  });
});
