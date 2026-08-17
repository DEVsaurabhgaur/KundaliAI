import { describe, it, expect } from 'vitest';
import { selectLongevityKarakas } from '../src/lib/jaimini/longevityKarakas';

describe('Longevity Karakas', () => {
  it('selects Brahma and Rudra indicators', () => {
    const karakas = selectLongevityKarakas(7, 11);
    expect(karakas.brahmaPlanet).toBe('Jupiter');
  });
});
