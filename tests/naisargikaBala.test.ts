import { describe, it, expect } from 'vitest';
import { getNaisargikaBala } from '../src/lib/shadbala/naisargikaBala';

describe('Naisargika Bala', () => {
  it('ranks Sun highest (60) and Saturn lowest (8.57)', () => {
    expect(getNaisargikaBala('Sun')).toBe(60);
    expect(getNaisargikaBala('Saturn')).toBe(8.57);
  });
});
