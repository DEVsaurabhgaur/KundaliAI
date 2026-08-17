/**
 * Adverse Combinations & Remedial Neutralizers
 */

export function checkKemadrumaYoga(hasPlanetsFlankingMoon: boolean, hasMoonInKendra: boolean): boolean {
  // Kemadruma is cancelled if planets occupy Kendras from Lagna or Moon
  return !hasPlanetsFlankingMoon && !hasMoonInKendra;
}
