/**
 * Vedic Gemstone Recommendation Engine (Ratna Vigyan)
 */

export interface GemstoneRecommendation {
  planet: string;
  primaryGem: string;
  sanskritName: string;
  substituteGem: string;
  fingerToWear: string;
  metal: string;
  auspiciousDay: string;
  benefits: string;
}

const GEM_DATA: Record<string, Omit<GemstoneRecommendation, 'planet'>> = {
  Sun: {
    primaryGem: 'Ruby',
    sanskritName: 'Manikya',
    substituteGem: 'Red Garnet',
    fingerToWear: 'Ring Finger (Right hand)',
    metal: 'Gold / Copper',
    auspiciousDay: 'Sunday morning',
    benefits: 'Confidence, leadership, vitality, governmental recognition'
  },
  Moon: {
    primaryGem: 'Natural Pearl',
    sanskritName: 'Mukta / Moti',
    substituteGem: 'Moonstone',
    fingerToWear: 'Little Finger',
    metal: 'Silver',
    auspiciousDay: 'Monday evening',
    benefits: 'Mental peace, emotional stability, motherly harmony, intuition'
  },
  Mars: {
    primaryGem: 'Red Coral',
    sanskritName: 'Moonga / Praval',
    substituteGem: 'Carnelian',
    fingerToWear: 'Ring Finger',
    metal: 'Gold / Copper',
    auspiciousDay: 'Tuesday morning',
    benefits: 'Physical energy, courage, victory in litigation, vitality'
  },
  Mercury: {
    primaryGem: 'Emerald',
    sanskritName: 'Panna / Marakata',
    substituteGem: 'Green Tourmaline / Peridot',
    fingerToWear: 'Little Finger',
    metal: 'Gold / Bronze',
    auspiciousDay: 'Wednesday morning',
    benefits: 'Business acumen, analytical intellect, speech eloquence'
  },
  Jupiter: {
    primaryGem: 'Yellow Sapphire',
    sanskritName: 'Pukhraj / Pushparaga',
    substituteGem: 'Yellow Topaz / Citrine',
    fingerToWear: 'Index Finger',
    metal: 'Gold',
    auspiciousDay: 'Thursday morning',
    benefits: 'Wisdom, spiritual growth, wealth expansion, marital bliss'
  },
  Venus: {
    primaryGem: 'Diamond',
    sanskritName: 'Heera / Vajra',
    substituteGem: 'White Sapphire / Opal',
    fingerToWear: 'Middle or Little Finger',
    metal: 'Platinum / White Gold / Silver',
    auspiciousDay: 'Friday morning',
    benefits: 'Luxury, creative talents, romantic charm, artistic refinement'
  },
  Saturn: {
    primaryGem: 'Blue Sapphire',
    sanskritName: 'Neelam / Indraneela',
    substituteGem: 'Amethyst / Blue Topaz',
    fingerToWear: 'Middle Finger',
    metal: 'Panchdhatu / Silver / Iron',
    auspiciousDay: 'Saturday evening',
    benefits: 'Discipline, profound focus, career longevity, spiritual endurance'
  }
};

export function recommendGemstones(favorablePlanets: string[]): GemstoneRecommendation[] {
  return favorablePlanets
    .filter(p => GEM_DATA[p])
    .map(p => ({
      planet: p,
      ...GEM_DATA[p]
    }));
}
