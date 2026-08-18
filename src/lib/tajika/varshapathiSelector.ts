/**
 * Varshapathi (Ruler of the Year) Determination
 * Candidate among the 5 Pancha Adhikaris with the highest Dwadashavargiya Bala and aspecting the Varsha Lagna.
 */

export function selectVarshapathi(candidates: { planet: string; bala: number; aspectsLagna: boolean }[]): string {
  const eligible = candidates.filter(c => c.aspectsLagna);
  if (eligible.length > 0) {
    eligible.sort((a, b) => b.bala - a.bala);
    return eligible[0].planet;
  }
  candidates.sort((a, b) => b.bala - a.bala);
  return candidates[0]?.planet || 'Sun';
}
