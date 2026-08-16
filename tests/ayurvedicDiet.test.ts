import { describe, it, expect } from 'vitest';
import { getAyurvedicDietPlan } from '../src/lib/ayurjyotish/ayurvedicDiet';

describe('Ayurvedic Diet Plan', () => {
  it('recommends cooling foods for fire signs', () => {
    const plan = getAyurvedicDietPlan('Aries');
    expect(plan.element).toBe('Fire');
    expect(plan.herbs).toContain('Brahmi');
  });
});
