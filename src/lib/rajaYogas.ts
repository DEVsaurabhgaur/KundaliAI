/**
 * Classical Raja Yogas Detection Engine
 * 1. Dharma-Karmadhipati Yoga (Connection between 9th and 10th lords)
 * 2. Vipareeta Raja Yoga (Harsha, Sarala, Vimala - 6, 8, 12 lords in dusthanas)
 * 3. Neechabhanga Raja Yoga (Cancellation and elevation of debilitation)
 */

export interface YogaFinding {
  name: string;
  category: 'Raja Yoga' | 'Vipareeta' | 'Neechabhanga';
  description: string;
  isFormed: boolean;
}

export function detectRajaYogas(
  kendraTrikonaConnections: boolean,
  dusthanaLordsExclusivelyInDusthanas: boolean,
  hasDebilitatedPlanetElevated: boolean
): YogaFinding[] {
  return [
    {
      name: 'Dharma-Karmadhipati Raja Yoga',
      category: 'Raja Yoga',
      description: 'Lords of 9th (Fortune) and 10th (Career) form conjunction or mutual aspect, granting supreme executive leadership.',
      isFormed: kendraTrikonaConnections
    },
    {
      name: 'Vipareeta Raja Yoga (Sarala/Vimala/Harsha)',
      category: 'Vipareeta',
      description: 'Dusthana lords (6th, 8th, 12th) situated strictly in dusthana houses, transforming crises into immense triumphs.',
      isFormed: dusthanaLordsExclusivelyInDusthanas
    },
    {
      name: 'Neechabhanga Raja Yoga',
      category: 'Neechabhanga',
      description: 'Debilitated planet achieves cancellation through its dispositor occupying an angular house from Lagna or Moon.',
      isFormed: hasDebilitatedPlanetElevated
    }
  ];
}
