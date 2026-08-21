/**
 * Nimitta Shastra: Shakuna (Animal & Bird Omens)
 */

export const SHAKUNA_OMENS: Record<string, { omenType: string; isAuspicious: boolean; interpretation: string }> = {
  CowMooeing: { omenType: 'Auditory', isAuspicious: true, interpretation: 'Prosperity, divine nourishment, success in enterprise.' },
  CrowRightSide: { omenType: 'Directional', isAuspicious: true, interpretation: 'Unexpected financial accretion and welcoming news.' },
  PeacockDance: { omenType: 'Visual', isAuspicious: true, interpretation: 'Supreme artistic and marital blessing.' },
  CatCrossingLeftToRight: { omenType: 'Locomotion', isAuspicious: false, interpretation: 'Short delay indicated; pause and drink water.' }
};

export function evaluateShakuna(omenKey: string) {
  return SHAKUNA_OMENS[omenKey] || { omenType: 'General', isAuspicious: true, interpretation: 'Favorable subtle cosmic energy.' };
}
