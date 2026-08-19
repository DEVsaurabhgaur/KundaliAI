import { describe, it, expect } from 'vitest';
import { selectBrahmaPlanet } from '../src/lib/sthira/brahmaAnchor';

describe('Brahma Anchor Selector', () => {
  it('packages Brahma planet and sign', () => {
    const res = selectBrahmaPlanet('Jupiter', 7);
    expect(res.brahmaPlanet).toBe('Jupiter');
  });
});
