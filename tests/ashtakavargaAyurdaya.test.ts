import { describe, it, expect } from 'vitest';
import { estimateAyurdayaYears } from '../src/lib/pinda/ashtakavargaAyurdaya';

describe('Ashtakavarga Ayurdaya', () => {
  it('estimates lifespan within 32 to 100 years', () => {
    const yrs = estimateAyurdayaYears(1000);
    expect(yrs).toBe(70.0);
  });
});
