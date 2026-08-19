import { describe, it, expect } from 'vitest';
import { prescribeGemstone } from '../src/lib/remedies/gemstonePrescription';

describe('Gemstone Prescription', () => {
  it('prescribes Yellow Sapphire for Jupiter', () => {
    const gem = prescribeGemstone('Jupiter');
    expect(gem.gem).toContain('Yellow Sapphire');
    expect(gem.finger).toContain('Index');
  });
});
