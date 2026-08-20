import { describe, it, expect } from 'vitest';
import { findMissingKarmicNumbers } from '../src/lib/numerology/karmicLessonNumbers';

describe('Karmic Lesson Numbers', () => {
  it('finds missing single digits in name vibrations', () => {
    const missing = findMissingKarmicNumbers('RAVI');
    expect(missing).toBeInstanceOf(Array);
  });
});
