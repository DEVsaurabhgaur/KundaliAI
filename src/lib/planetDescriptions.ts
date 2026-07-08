/** Tooltip and description content for planets in Vedic astrology */

export const PLANET_DESCRIPTIONS: Record<string, {
  deity: string;
  element: string;
  quality: string;
  governs: string[];
  keywords: string[];
  body: string;
}> = {
  Sun: {
    deity: 'Lord Surya',
    element: 'Fire',
    quality: 'Royal, Authoritative',
    governs: ['Soul', 'Father', 'Authority', 'Government', 'Vitality'],
    keywords: ['Leadership', 'Ego', 'Pride', 'Fame', 'Power'],
    body: 'Heart, eyes, bone structure',
  },
  Moon: {
    deity: 'Lord Chandra',
    element: 'Water',
    quality: 'Nurturing, Receptive',
    governs: ['Mind', 'Mother', 'Emotions', 'Public', 'Intuition'],
    keywords: ['Feelings', 'Memory', 'Imagination', 'Home', 'Comfort'],
    body: 'Mind, chest, fluids, left eye',
  },
  Mars: {
    deity: 'Lord Mangal / Kartikeya',
    element: 'Fire',
    quality: 'Aggressive, Dynamic',
    governs: ['Courage', 'Brothers', 'Property', 'Accidents', 'Surgery'],
    keywords: ['Action', 'Passion', 'Conflict', 'Energy', 'Drive'],
    body: 'Blood, muscles, nose, bile',
  },
  Mercury: {
    deity: 'Lord Budha',
    element: 'Earth/Air',
    quality: 'Intellectual, Adaptable',
    governs: ['Intelligence', 'Communication', 'Business', 'Education', 'Trade'],
    keywords: ['Logic', 'Speech', 'Writing', 'Mathematics', 'Analysis'],
    body: 'Nervous system, skin, lungs, arms',
  },
  Jupiter: {
    deity: 'Lord Brihaspati / Guru',
    element: 'Ether',
    quality: 'Expansive, Benevolent',
    governs: ['Wisdom', 'Religion', 'Children', 'Higher education', 'Wealth'],
    keywords: ['Growth', 'Grace', 'Truth', 'Philosophy', 'Generosity'],
    body: 'Liver, hips, thighs, fat',
  },
  Venus: {
    deity: 'Lord Shukra',
    element: 'Water',
    quality: 'Pleasurable, Harmonious',
    governs: ['Love', 'Beauty', 'Arts', 'Luxury', 'Marriage'],
    keywords: ['Creativity', 'Romance', 'Pleasure', 'Fashion', 'Harmony'],
    body: 'Kidneys, reproductive system, throat',
  },
  Saturn: {
    deity: 'Lord Shani',
    element: 'Air',
    quality: 'Restricting, Disciplining',
    governs: ['Karma', 'Longevity', 'Obstacles', 'Service', 'Justice'],
    keywords: ['Discipline', 'Patience', 'Hard work', 'Lessons', 'Delay'],
    body: 'Bones, teeth, knees, nervous system',
  },
};

export function getPlanetDescription(planet: string) {
  return PLANET_DESCRIPTIONS[planet] ?? null;
}
