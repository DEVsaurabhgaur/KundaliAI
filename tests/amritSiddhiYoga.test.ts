import { describe, it, expect } from 'vitest';
import { checkAmritSiddhiYoga } from '../src/lib/panchang/amritSiddhiYoga';

describe('Amrit Siddhi Yoga', () => {
  it('validates Thursday + Pushya as Amrit Siddhi', () => {
    expect(checkAmritSiddhiYoga(4, 7)).toBe(true);
  });
});
