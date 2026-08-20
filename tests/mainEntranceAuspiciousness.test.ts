import { describe, it, expect } from 'vitest';
import { isEntrancePadaAuspicious } from '../src/lib/vastu/mainEntranceAuspiciousness';

describe('Entrance Pada Auspiciousness', () => {
  it('approves Jayanta (E3) and Indra (E4)', () => {
    expect(isEntrancePadaAuspicious('E3')).toBe(true);
    expect(isEntrancePadaAuspicious('E1')).toBe(false);
  });
});
