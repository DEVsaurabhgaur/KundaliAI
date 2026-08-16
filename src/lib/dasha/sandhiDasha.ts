/**
 * Dasha Sandhi (Junction between two major Mahadashas)
 * The final 6 months of an ending Dasha and the first 6 months of a new Dasha.
 */

export function checkDashaSandhi(monthsRemainingInCurrentDasha: number) {
  const isSandhi = monthsRemainingInCurrentDasha <= 6 && monthsRemainingInCurrentDasha >= -6;
  return {
    isDashaSandhi: isSandhi,
    advice: isSandhi
      ? 'Dasha Sandhi junction active. Maintain emotional equanimity and avoid impulsive life overhauls.'
      : 'Smooth planetary flow; no transitional sandhi turbulence.'
  };
}
