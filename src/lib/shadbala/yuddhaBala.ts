/**
 * Graha Yuddha (Planetary War)
 * Two planets (among Mars, Mercury, Jupiter, Venus, Saturn) within 1 degree.
 * The planet with northern declination or greater brightness wins and absorbs strength from the loser.
 */

export function calculateYuddhaBala(isWinner: boolean, differenceInVirupas: number): number {
  return isWinner ? differenceInVirupas : -differenceInVirupas;
}
