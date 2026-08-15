/**
 * Vedha Koota (Mutual Nakshatra Affliction / Piercing)
 * Checks pairs of prohibited nakshatras (e.g. Ashwini vs Jyeshtha, Bharani vs Anuradha).
 */

const VEDHA_PAIRS: [number, number][] = [
  [0, 17], [1, 16], [2, 15], [3, 14], [5, 18], [6, 19], [7, 20], [8, 21]
];

export function checkVedhaKoota(boyNak: number, girlNak: number) {
  const b = boyNak % 27;
  const g = girlNak % 27;

  const hasVedha = VEDHA_PAIRS.some(
    ([n1, n2]) => (b === n1 && g === n2) || (b === n2 && g === n1)
  );

  return {
    hasVedhaDosha: hasVedha,
    isCompatible: !hasVedha
  };
}
