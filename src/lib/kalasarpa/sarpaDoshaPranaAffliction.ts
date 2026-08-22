export function evaluateSarpaPrana(hasSarpaDosha: boolean): { recommendedPranayama: string; durationMins: number } {
  return {
    recommendedPranayama: hasSarpaDosha ? 'Nadi Shodhana & Bhramari Pranayama' : 'Standard Anulom Vilom',
    durationMins: hasSarpaDosha ? 20 : 10
  };
}
