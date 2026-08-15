/**
 * Kemadruma Yoga Bhanga (Cancellation Conditions)
 * Kemadruma is cancelled if:
 * 1. Planets occupy Kendra from Moon
 * 2. Planets occupy Kendra from Lagna
 * 3. Moon is conjoined with a benefic or aspected by Jupiter/Venus
 */

export interface KemadrumaBhangaStatus {
  isKemadrumaPresent: boolean;
  isCancelled: boolean;
  cancellationReasons: string[];
}

export function evaluateKemadrumaBhanga(
  hasPlanetsInMoonKendra: boolean,
  hasPlanetsInLagnaKendra: boolean,
  isMoonWithBenefic: boolean
): KemadrumaBhangaStatus {
  const reasons: string[] = [];

  if (hasPlanetsInMoonKendra) reasons.push('Benefic/active planets situated in Kendra from Moon.');
  if (hasPlanetsInLagnaKendra) reasons.push('Planets occupy Kendra houses from Ascendant.');
  if (isMoonWithBenefic) reasons.push('Moon is conjoined or strongly aspected by Jupiter or Venus.');

  const isCancelled = reasons.length > 0;

  return {
    isKemadrumaPresent: true,
    isCancelled,
    cancellationReasons: reasons
  };
}
