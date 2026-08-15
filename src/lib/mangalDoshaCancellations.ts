/**
 * Manglik Dosha Cancellation Rules Engine
 * Classical exemptions:
 * 1. Mars in Aries (1st), Scorpio (4th), Capricorn (7th/exalted), Leo (8th), Sagittarius (12th)
 * 2. Mars conjoined with Jupiter or Moon
 * 3. Mars aspected by strong benefic Jupiter
 */

export interface ManglikExemption {
  isCancelled: boolean;
  exemptionReasons: string[];
}

export function checkManglikExemptions(
  marsHouse: number,
  marsSign: string,
  isMarsWithJupiterOrMoon: boolean,
  isJupiterAspectingMars: boolean
): ManglikExemption {
  const reasons: string[] = [];

  if (marsHouse === 1 && marsSign === 'Aries') reasons.push('Mars is in own sign Aries in 1st house.');
  if (marsHouse === 4 && marsSign === 'Scorpio') reasons.push('Mars is in own sign Scorpio in 4th house.');
  if (marsHouse === 7 && marsSign === 'Capricorn') reasons.push('Mars is exalted in Capricorn in 7th house.');
  if (marsHouse === 8 && marsSign === 'Leo') reasons.push('Mars in Leo in 8th house is exempted.');
  if (marsHouse === 12 && marsSign === 'Sagittarius') reasons.push('Mars in Sagittarius in 12th house is exempted.');
  if (isMarsWithJupiterOrMoon) reasons.push('Mars is conjoined with Jupiter or Moon (Guru-Mangala / Chandra-Mangala yoga).');
  if (isJupiterAspectingMars) reasons.push('Direct benefic aspect of Jupiter dissolves malefic influence.');

  return {
    isCancelled: reasons.length > 0,
    exemptionReasons: reasons
  };
}
