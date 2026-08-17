import { describe, it, expect } from 'vitest';
import { buildMahapurushaSummary } from '../src/lib/yogas/panchaMahapurushaSummary';

describe('Mahapurusha Summary', () => {
  it('flags supreme status when 2 or more Mahapurusha yogas exist', () => {
    const summary = buildMahapurushaSummary(['Ruchaka Yoga', 'Hamsa Yoga']);
    expect(summary.hasSupremeKinglyStatus).toBe(true);
  });
});
