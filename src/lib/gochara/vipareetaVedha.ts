/**
 * Vipareeta Vedha (Inverse Obstruction)
 * When an adverse transit is neutralized by an occupant in its opposing vedha house.
 */

export function checkVipareetaVedha(hasAdverseTransit: boolean, hasOpposingOccupant: boolean): boolean {
  return hasAdverseTransit && hasOpposingOccupant;
}
