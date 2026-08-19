import { describe, it, expect } from 'vitest';
import { generateKarakaDashaTimeline } from '../src/lib/sthira/karakaDashaEngine';

describe('Karaka Dasha', () => {
  it('generates timeline for 7 karakas', () => {
    const tl = generateKarakaDashaTimeline({ AK: 0, AmK: 4 });
    expect(tl).toHaveLength(7);
  });
});
