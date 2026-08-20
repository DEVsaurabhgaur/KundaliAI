import { describe, it, expect } from 'vitest';
import { detectSBCVedhaHits } from '../src/lib/sbc/sbcTransitHitDetector';

describe('SBC Transit Hit Detector', () => {
  it('detects frontal hit when transiting malefic opposes natal star', () => {
    const hit = detectSBCVedhaHits([0], [14]);
    expect(hit).toBe(true);
  });
});
