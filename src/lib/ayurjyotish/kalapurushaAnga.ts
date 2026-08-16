/**
 * Kalapurusha Body Parts Mapping
 * Aries: Head | Taurus: Face/Throat | Gemini: Arms/Shoulders | Cancer: Chest/Lungs
 * Leo: Heart/Spine | Virgo: Digestion/Intestines | Libra: Kidneys/Lower Back
 * Scorpio: Reproductive/Pelvic | Sagittarius: Thighs/Hips | Capricorn: Knees/Skeleton
 * Aquarius: Calves/Ankles/Circulation | Pisces: Feet/Lymphatics
 */

export const KALAPURUSHA_PARTS: Record<string, string> = {
  Aries: 'Head, brain, cranium, pineal gland',
  Taurus: 'Face, throat, vocal cords, thyroid, neck',
  Gemini: 'Shoulders, arms, hands, respiratory bronchi',
  Cancer: 'Chest, breasts, stomach, gastric membranes',
  Leo: 'Heart, spine, upper back, vital circulation',
  Virgo: 'Abdomen, intestines, digestive enzymes, spleen',
  Libra: 'Kidneys, lumbar region, skin equilibrium',
  Scorpio: 'Pelvic organs, excretory & reproductive systems',
  Sagittarius: 'Thighs, hips, arterial system, sciatic nerves',
  Capricorn: 'Knees, bones, skeletal joints, teeth',
  Aquarius: 'Calves, shins, ankles, neuromuscular conduits',
  Pisces: 'Feet, toes, lymphatic system, psychic receptors'
};

export function getBodyPartForSign(sign: string): string {
  return KALAPURUSHA_PARTS[sign] || 'Universal bodily constitution';
}
