import { describe, it, expect } from 'vitest';
import { calculateAbhijitMuhurta } from '../src/lib/muhurta/abhijitMuhurta';

describe('Abhijit Muhurta', () => {
  it('calculates 8th diurnal segment', () => {
    const now = Date.now();
    const res = calculateAbhijitMuhurta(now, now + 43200000);
    expect(res.virtue).toContain('Vishnu');
  });
});
