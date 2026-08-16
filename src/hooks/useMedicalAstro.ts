import { useMemo } from 'react';
import { calculateTridoshaProfile } from '../lib/ayurjyotish/tridosha';
import { getAyurvedicDietPlan } from '../lib/ayurjyotish/ayurvedicDiet';

export function useMedicalAstro(ascendant: string) {
  const profile = useMemo(() => calculateTridoshaProfile({}), []);
  const diet = useMemo(() => getAyurvedicDietPlan(ascendant), [ascendant]);

  return { profile, diet };
}
