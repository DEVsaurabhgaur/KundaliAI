import { describe, it, expect } from 'vitest';
import { evaluateChoghadiya } from '../src/lib/muhurta/choghadiyaPanchang';

describe('Choghadiya Evaluation', () => {
  it('evaluates Amrit as Auspicious and Kaal as Inauspicious', () => {
    expect(evaluateChoghadiya('Amrit').nature).toBe('Auspicious');
    expect(evaluateChoghadiya('Kaal').nature).toBe('Inauspicious');
  });
});
