import { describe, it, expect } from 'vitest';
import { profileCareer } from '../src/lib/career/careerProfiler';

describe('Career Profiler', () => {
  it('profiles leadership vocation for Sun as 10th lord', () => {
    const path = profileCareer('Sun');
    expect(path.domain).toContain('Leadership');
  });
});
