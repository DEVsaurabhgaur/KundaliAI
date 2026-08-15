/**
 * Vashya Koota (2 Points Max)
 * Measures mutual influence, control, and emotional magnetic attraction.
 * Types: Chatushpada (Quadruped), Manava (Human), Jalachara (Water), Vanachara (Wild), Keeta (Insect)
 */

export function calculateVashyaKoota(boySignIndex: number, girlSignIndex: number) {
  if (boySignIndex === girlSignIndex) {
    return { koota: 'Vashya', maxPoints: 2, obtainedPoints: 2, isCompatible: true };
  }

  // Friendly sign pairings obtain 1.0 or 2.0 points
  const diff = Math.abs(boySignIndex - girlSignIndex);
  const points = (diff === 4 || diff === 8) ? 2 : (diff === 2 || diff === 6 || diff === 10) ? 1 : 0.5;

  return {
    koota: 'Vashya',
    maxPoints: 2,
    obtainedPoints: points,
    isCompatible: points >= 1
  };
}
