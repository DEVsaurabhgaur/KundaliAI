import { describe, it, expect } from 'vitest';
import { getMunthaHousePhala } from '../src/lib/tajika/munthaHousePhala';

describe('Muntha House Phala', () => {
  it('returns high career achievement for 10th house Muntha', () => {
    expect(getMunthaHousePhala(10)).toContain('Peak career');
  });
});
