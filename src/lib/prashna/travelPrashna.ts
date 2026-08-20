/**
 * Yatra (Travel) Horary Prashna Engine
 */

export function evaluateTravelPrashna(is4thHouseStrong: boolean, is9thHouseBenefic: boolean) {
  const isSafe = is4thHouseStrong && is9thHouseBenefic;
  return {
    isFavorable: isSafe,
    verdict: isSafe ? 'Smooth journey and fruitful safe return.' : 'Possible delays or transit disruptions; review itinerary.'
  };
}
