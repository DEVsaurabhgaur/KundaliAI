/**
 * Gemstone Weight Recommendation (Rule: ~1 Ratti per 10-12 kg body weight)
 */

export function calculateGemstoneWeight(bodyWeightKg: number): { ratti: number; carats: number } {
  const ratti = Math.max(3.5, Number((bodyWeightKg / 11).toFixed(2)));
  const carats = Number((ratti * 0.91).toFixed(2));
  return { ratti, carats };
}
