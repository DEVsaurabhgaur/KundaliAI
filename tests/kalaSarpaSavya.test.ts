import { describe, it, expect } from 'vitest';
import { determineKalaSarpaDirection } from '../src/lib/kalasarpa/kalaSarpaSavya';

describe('Kala Sarpa Direction', () => {
  it('identifies Savya when moving towards Rahu', () => {
    expect(determineKalaSarpaDirection(true)).toContain('Savya');
  });
});
