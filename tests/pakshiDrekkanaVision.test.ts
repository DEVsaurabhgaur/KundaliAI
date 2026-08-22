import { describe, it, expect } from 'vitest';
import { isPakshiDrekkana } from '../src/lib/drekkana/pakshiDrekkanaVision';

describe('Pakshi Drekkana', () => {
  it('identifies 2nd decanate of Gemini as Pakshi', () => {
    expect(isPakshiDrekkana(2, 2)).toBe(true);
  });
});
