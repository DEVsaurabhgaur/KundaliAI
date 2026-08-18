import { describe, it, expect } from 'vitest';
import { selectVarshapathi } from '../src/lib/tajika/varshapathiSelector';

describe('Varshapathi Selector', () => {
  it('selects candidate with highest bala that aspects lagna', () => {
    const candidates = [
      { planet: 'Jupiter', bala: 15, aspectsLagna: true },
      { planet: 'Sun', bala: 18, aspectsLagna: false }
    ];
    expect(selectVarshapathi(candidates)).toBe('Jupiter');
  });
});
