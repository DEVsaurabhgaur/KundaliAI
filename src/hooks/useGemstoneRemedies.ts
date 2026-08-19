import { useMemo } from 'react';
import { prescribeGemstone } from '../lib/remedies/gemstonePrescription';
import { calculateGemstoneWeight } from '../lib/remedies/gemstoneWeights';

export function useGemstoneRemedies(beneficPlanet: string, weightKg: number) {
  const gem = useMemo(() => prescribeGemstone(beneficPlanet), [beneficPlanet]);
  const weight = useMemo(() => calculateGemstoneWeight(weightKg), [weightKg]);

  return { gemDetails: gem, recommendedWeight: weight };
}
