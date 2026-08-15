import { describe, it, expect } from 'vitest';
import { calculateJaiminiKarakas } from '../src/lib/jaiminiKarakas';

describe('Jaimini Karakas Calculator', () => {
  it('identifies highest degree planet as Atmakaraka (AK)', () => {
    const planets = [
      { name: 'Sun', longitude: 28.5 },
      { name: 'Moon', longitude: 12.0 },
      { name: 'Mars', longitude: 5.0 }
    ];
    const karakas = calculateJaiminiKarakas(planets);
    expect(karakas[0].name).toBe('Sun');
    expect(karakas[0].karakaRole).toContain('Atmakaraka');
  });
});
