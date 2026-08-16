import { describe, it, expect } from 'vitest';
import { calculateArudhaPada } from '../src/lib/career/arudhaPadas';

describe('Arudha Pada Engine', () => {
  it('calculates Arudha Pada with reflection exception rules', () => {
    const a1 = calculateArudhaPada(0, 4); // Aries (0), lord in Leo (4) -> dist 4 -> Arudha in Sag (8)
    expect(a1).toBe(8);
  });
});
