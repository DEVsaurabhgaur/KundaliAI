/**
 * Jaimini Raja & Dhana Yogas
 * Formed when Atmakaraka (AK) and Putrakaraka (PK) conjoin or mutually aspect.
 */

export function checkJaiminiRajaYoga(isAKconjoinedPK: boolean, isAKaspectedByDK: boolean) {
  return {
    hasJaiminiRajaYoga: isAKconjoinedPK,
    hasMahalaxmiYoga: isAKaspectedByDK,
    verdict: isAKconjoinedPK ? 'Supreme Jaimini Raja Yoga active: High governmental honors and lasting leadership.' : 'Normal'
  };
}
