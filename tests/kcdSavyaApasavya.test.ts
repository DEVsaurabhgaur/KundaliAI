import { describe, it, expect } from 'vitest';
import { isSavyaNakshatra } from '../src/lib/kcd/kcdSavyaApasavya';

describe('KCD Savya Apasavya', () => {
  it('identifies Ashwini (0) as Savya and Bharani (1) as Apasavya', () => {
    expect(isSavyaNakshatra(0)).toBe(true);
    expect(isSavyaNakshatra(1)).toBe(false);
  });
});
