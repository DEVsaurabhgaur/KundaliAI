/**
 * Synastry Aspect Overlay Matrix between Partner A and Partner B
 */

export interface SynastryAspect {
  planetA: string;
  planetB: string;
  aspectType: 'Conjunction' | 'Trine' | 'Sextile' | 'Square' | 'Opposition';
  orbDegrees: number;
  harmonyScore: number;
}

export function calculateSynastryAspects(
  chartA: { name: string; longitude: number }[],
  chartB: { name: string; longitude: number }[]
): SynastryAspect[] {
  const aspects: SynastryAspect[] = [];

  chartA.forEach(pA => {
    chartB.forEach(pB => {
      const diff = Math.abs((pA.longitude - pB.longitude + 360) % 360);
      const separation = diff > 180 ? 360 - diff : diff;

      if (separation <= 8) {
        aspects.push({ planetA: pA.name, planetB: pB.name, aspectType: 'Conjunction', orbDegrees: separation, harmonyScore: 8 });
      } else if (Math.abs(separation - 120) <= 6) {
        aspects.push({ planetA: pA.name, planetB: pB.name, aspectType: 'Trine', orbDegrees: Math.abs(separation - 120), harmonyScore: 10 });
      } else if (Math.abs(separation - 60) <= 5) {
        aspects.push({ planetA: pA.name, planetB: pB.name, aspectType: 'Sextile', orbDegrees: Math.abs(separation - 60), harmonyScore: 7 });
      } else if (Math.abs(separation - 90) <= 6) {
        aspects.push({ planetA: pA.name, planetB: pB.name, aspectType: 'Square', orbDegrees: Math.abs(separation - 90), harmonyScore: -5 });
      } else if (Math.abs(separation - 180) <= 7) {
        aspects.push({ planetA: pA.name, planetB: pB.name, aspectType: 'Opposition', orbDegrees: Math.abs(separation - 180), harmonyScore: 4 });
      }
    });
  });

  return aspects;
}
