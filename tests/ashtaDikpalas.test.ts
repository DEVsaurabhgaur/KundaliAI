import { describe, it, expect } from 'vitest';
import { getDirectionInfo } from '../src/lib/vastu/ashtaDikpalas';

describe('Ashta Dikpalas', () => {
  it('maps East to Sun and Indra, and Northeast to Jupiter', () => {
    expect(getDirectionInfo('East').planet).toBe('Sun');
    expect(getDirectionInfo('Northeast').planet).toBe('Jupiter');
  });
});
