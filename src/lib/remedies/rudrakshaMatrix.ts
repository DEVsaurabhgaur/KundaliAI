/**
 * 1 to 14 Mukhi Rudraksha Planetary Alignment Matrix
 */

export const RUDRAKSHA_MATRIX: Record<number, { deity: string; planet: string; beejMantra: string; benefit: string }> = {
  1: { deity: 'Shiva', planet: 'Sun', beejMantra: 'Om Hreem Namah', benefit: 'Supreme consciousness, leadership, eradication of solar afflictions.' },
  2: { deity: 'Ardhanarishvara', planet: 'Moon', beejMantra: 'Om Namah', benefit: 'Emotional equilibrium, marital unity, peaceful mind.' },
  3: { deity: 'Agni', planet: 'Mars', beejMantra: 'Om Kleem Namah', benefit: 'Purification of past karmas, kinetic dynamism, courage.' },
  4: { deity: 'Brahma', planet: 'Mercury', beejMantra: 'Om Hreem Namah', benefit: 'Intellectual acumen, eloquence, creative writing.' },
  5: { deity: 'Kalagni Rudra', planet: 'Jupiter', beejMantra: 'Om Hreem Namah', benefit: 'Spiritual gnana, memory retention, general health.' },
  6: { deity: 'Kartikeya', planet: 'Venus', beejMantra: 'Om Hreem Hum Namah', benefit: 'Willpower, grounding, artistic mastery.' },
  7: { deity: 'Mahalakshmi', planet: 'Saturn', beejMantra: 'Om Hum Namah', benefit: 'Wealth accretion, pacification of Shani Sade Sati.' },
  8: { deity: 'Ganesha', planet: 'Rahu', beejMantra: 'Om Hum Namah', benefit: 'Obstacle removal, protection from occult negativity.' },
  9: { deity: 'Durga', planet: 'Ketu', beejMantra: 'Om Hreem Hum Namah', benefit: 'Fearlessness, dynamism, spiritual surrender.' }
};

export function getRudrakshaDetails(mukhi: number) {
  return RUDRAKSHA_MATRIX[mukhi] || RUDRAKSHA_MATRIX[5];
}
