import { describe, it, expect } from 'vitest';
import { calculateKarana } from '../src/lib/panchang/karanaEngine';

describe('Karana Engine', () => {
  it('identifies Kinstughna as the first fixed Karana', () => {
    const karana = calculateKarana(0, 2);
    expect(karana.karanaName).toBe('Kinstughna');
    expect(karana.type).toBe('Fixed');
  });
});
