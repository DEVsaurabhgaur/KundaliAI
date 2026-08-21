/**
 * Anga Sphurana (Body Involuntary Pulsations / Twitching)
 * Rule: Right side pulsation is auspicious for Men; Left side is auspicious for Women.
 */

export function evaluateSphurana(bodyPart: string, isRightSide: boolean, isMale: boolean) {
  const isAuspicious = isMale === isRightSide;
  return {
    bodyPart,
    isAuspicious,
    meaning: isAuspicious ? `Auspicious pulsation on ${bodyPart}: Joy, victory, wealth accretion.` : `Challenging pulsation on ${bodyPart}: Exercise patience and protective chanting.`
  };
}
