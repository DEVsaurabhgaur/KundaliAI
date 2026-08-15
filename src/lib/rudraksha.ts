/**
 * Vedic Rudraksha Recommendation Guide (Mukhi Selection)
 */

export interface RudrakshaInfo {
  mukhiCount: number;
  rulingPlanet: string;
  presidingDeity: string;
  mantra: string;
  healthAndSpiritualBenefits: string;
}

export const RUDRAKSHA_GUIDE: Record<string, RudrakshaInfo> = {
  Sun: {
    mukhiCount: 1,
    rulingPlanet: 'Sun',
    presidingDeity: 'Lord Shiva',
    mantra: 'Om Hreem Namah',
    healthAndSpiritualBenefits: 'Supreme consciousness, aura brilliance, cure for migraines'
  },
  Moon: {
    mukhiCount: 2,
    rulingPlanet: 'Moon',
    presidingDeity: 'Ardhanarishwara',
    mantra: 'Om Namah',
    healthAndSpiritualBenefits: 'Emotional balance, relationship harmony, family peace'
  },
  Mars: {
    mukhiCount: 3,
    rulingPlanet: 'Mars',
    presidingDeity: 'Lord Agni',
    mantra: 'Om Kleem Namah',
    healthAndSpiritualBenefits: 'Destroys past karmic sins, boosts digestion and willpower'
  },
  Mercury: {
    mukhiCount: 4,
    rulingPlanet: 'Mercury',
    presidingDeity: 'Lord Brahma',
    mantra: 'Om Hreem Namah',
    healthAndSpiritualBenefits: 'Sharp memory, vocal articulation, academic brilliance'
  },
  Jupiter: {
    mukhiCount: 5,
    rulingPlanet: 'Jupiter',
    presidingDeity: 'Lord Kalagni Rudra',
    mantra: 'Om Hreem Namah',
    healthAndSpiritualBenefits: 'Universal peace, blood pressure regulation, wisdom'
  },
  Venus: {
    mukhiCount: 6,
    rulingPlanet: 'Venus',
    presidingDeity: 'Lord Kartikeya',
    mantra: 'Om Hreem Hoom Namah',
    healthAndSpiritualBenefits: 'Attraction, vitality, nervous strength, artistic prowess'
  },
  Saturn: {
    mukhiCount: 7,
    rulingPlanet: 'Saturn',
    presidingDeity: 'Goddess Mahalakshmi',
    mantra: 'Om Hoom Namah',
    healthAndSpiritualBenefits: 'Freedom from financial hardship, relief from Sade Sati'
  },
  Rahu: {
    mukhiCount: 8,
    rulingPlanet: 'Rahu',
    presidingDeity: 'Lord Ganesha',
    mantra: 'Om Hoom Namah',
    healthAndSpiritualBenefits: 'Removes sudden hurdles, protection from black magic and fear'
  },
  Ketu: {
    mukhiCount: 9,
    rulingPlanet: 'Ketu',
    presidingDeity: 'Goddess Durga (Navadurga)',
    mantra: 'Om Hreem Hoom Namah',
    healthAndSpiritualBenefits: 'Courage, liberation (Moksha), protection from phobias'
  }
};
