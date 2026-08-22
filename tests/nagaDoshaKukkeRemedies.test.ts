import { describe, it, expect } from 'vitest';
import { getNagaRemedyPilgrimages } from '../src/lib/kalasarpa/nagaDoshaKukkeRemedies';

describe('Naga Remedy Pilgrimages', () => {
  it('lists Kukke Subramanya and Kalahasti', () => {
    const list = getNagaRemedyPilgrimages();
    expect(list[0]).toContain('Subramanya');
  });
});
