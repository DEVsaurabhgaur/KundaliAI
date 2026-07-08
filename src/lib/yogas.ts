/** Vedic astrology Yogas - auspicious/inauspicious planetary combinations */

export interface Yoga {
  name: string;
  sanskritName: string;
  description: string;
  type: 'auspicious' | 'inauspicious' | 'mixed';
}

export const RAJA_YOGAS: Yoga[] = [
  {
    name: 'Hamsa Yoga',
    sanskritName: 'à¤¹à¤‚à¤¸ à¤¯à¥‹à¤—',
    description: 'Jupiter in Kendra (1,4,7,10) in own or exalted sign. Grants wisdom, spiritual knowledge, and prosperity.',
    type: 'auspicious',
  },
  {
    name: 'Malavya Yoga',
    sanskritName: 'à¤®à¤¾à¤²à¤µà¥à¤¯ à¤¯à¥‹à¤—',
    description: 'Venus in Kendra in own or exalted sign. Bestows beauty, luxury, artistic talent, and marital bliss.',
    type: 'auspicious',
  },
  {
    name: 'Ruchaka Yoga',
    sanskritName: 'à¤°à¥à¤šà¤• à¤¯à¥‹à¤—',
    description: 'Mars in Kendra in own or exalted sign. Gives courage, leadership, physical strength, and fame.',
    type: 'auspicious',
  },
  {
    name: 'Bhadra Yoga',
    sanskritName: 'à¤­à¤¦à¥à¤° à¤¯à¥‹à¤—',
    description: 'Mercury in Kendra in own or exalted sign. Confers intelligence, business acumen, and communication skills.',
    type: 'auspicious',
  },
  {
    name: 'Shasha Yoga',
    sanskritName: 'à¤¶à¤¶ à¤¯à¥‹à¤—',
    description: 'Saturn in Kendra in own or exalted sign. Provides discipline, longevity, service-mindedness, and authority.',
    type: 'auspicious',
  },
];

export const DHANA_YOGAS: Yoga[] = [
  {
    name: 'Lakshmi Yoga',
    sanskritName: 'à¤²à¤•à¥à¤·à¥à¤®à¥€ à¤¯à¥‹à¤—',
    description: 'Lord of 9th in own sign and Venus in Kendra/Trikona. Grants exceptional wealth and fortune.',
    type: 'auspicious',
  },
  {
    name: 'Chandra-Mangal Yoga',
    sanskritName: 'à¤šà¤‚à¤¦à¥à¤°-à¤®à¤‚à¤—à¤² à¤¯à¥‹à¤—',
    description: 'Moon and Mars conjunction or mutual aspect. Indicates wealth through bold financial decisions.',
    type: 'mixed',
  },
];

export const DOSHA_YOGAS: Yoga[] = [
  {
    name: 'Mangal Dosha',
    sanskritName: 'à¤®à¤‚à¤—à¤² à¤¦à¥‹à¤·',
    description: 'Mars placed in houses 1, 2, 4, 7, 8, or 12. Can affect marital harmony; remedies are recommended.',
    type: 'inauspicious',
  },
  {
    name: 'Kaal Sarp Dosha',
    sanskritName: 'à¤•à¤¾à¤² à¤¸à¤°à¥à¤ª à¤¦à¥‹à¤·',
    description: 'All planets hemmed between Rahu and Ketu. May cause delays and obstacles; remedies advised.',
    type: 'inauspicious',
  },
  {
    name: 'Shani Sade Sati',
    sanskritName: 'à¤¶à¤¨à¤¿ à¤¸à¤¾à¤¢à¤¼à¥‡ à¤¸à¤¾à¤¤à¥€',
    description: 'Saturn transiting over natal Moon sign and adjacent signs (7.5 years). Period of testing and transformation.',
    type: 'mixed',
  },
];
