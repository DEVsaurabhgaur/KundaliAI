import { describe, it, expect } from 'vitest';
import { checkMuhurtaDoshas } from '../src/lib/muhurta/mahadosha21';

describe('21 Mahadoshas Filter', () => {
  it('flags active doshas', () => {
    const doshas = checkMuhurtaDoshas(true, false, true);
    expect(doshas).toHaveLength(2);
  });
});
