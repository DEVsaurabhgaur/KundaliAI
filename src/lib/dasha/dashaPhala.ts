/**
 * Dasha Phala (Interpretive Forecast Matrix)
 */

export const DASHA_PHALA_TEXTS: Record<string, string> = {
  Sun: 'Period of elevation in authority, governmental honors, fatherly focus, and vital executive ambition.',
  Moon: 'Emotional expansion, motherly blessings, public acclaim, travel over water, and heightened creativity.',
  Mars: 'High physical stamina, conquest of competitors, real estate gains, surgical focus, and dynamic projects.',
  Rahu: 'Unconventional growth, foreign associations, tech breakthroughs, intense desires, and unexpected shifts.',
  Jupiter: 'Spiritual illumination, birth of children, wealth accumulation, mentorship, and universal wisdom.',
  Saturn: 'Enduring perseverance, structural discipline, karmic restitution, service to masses, and long-term mastery.',
  Mercury: 'Business expansion, communicative eloquence, analytical prowess, trading gains, and academic success.',
  Ketu: 'Spiritual detachment, intuitive breakthroughs, occult insights, research mastery, and moksha focus.',
  Venus: 'Luxurious comforts, romantic bliss, vehicle acquisition, artistic endeavors, and aesthetic joy.'
};

export function getDashaInterpretation(mahaLord: string, antarLord: string): string {
  const main = DASHA_PHALA_TEXTS[mahaLord] || '';
  return `${mahaLord}-${antarLord} Period: ${main} Colored by ${antarLord}'s specific sub-vibrations.`;
}
