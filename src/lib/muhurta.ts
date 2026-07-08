/** Muhurta (auspicious timing) system for KundaliAI */

export interface Muhurta {
  name: string;
  sanskritName: string;
  quality: 'auspicious' | 'inauspicious' | 'mixed';
  suitableFor: string[];
  description: string;
}

export const CHOGHADIYA_MUHURTAS: Muhurta[] = [
  {
    name: 'Amrit',
    sanskritName: 'à¤…à¤®à¥ƒà¤¤',
    quality: 'auspicious',
    suitableFor: ['All auspicious activities', 'Business', 'Travel', 'Marriage'],
    description: 'The most auspicious Choghadiya â€” ruled by Moon. Excellent for starting important work.',
  },
  {
    name: 'Shubh',
    sanskritName: 'à¤¶à¥à¤­',
    quality: 'auspicious',
    suitableFor: ['Marriages', 'New ventures', 'Religious ceremonies'],
    description: 'Ruled by Jupiter. Highly favorable for auspicious beginnings.',
  },
  {
    name: 'Labh',
    sanskritName: 'à¤²à¤¾à¤­',
    quality: 'auspicious',
    suitableFor: ['Business', 'Financial dealings', 'Job interviews', 'Starting education'],
    description: 'Ruled by Mercury. Brings gains and profit to endeavors.',
  },
  {
    name: 'Char',
    sanskritName: 'à¤šà¤°',
    quality: 'mixed',
    suitableFor: ['Travel', 'Short journeys'],
    description: 'Ruled by Venus. Good for travel but mixed for other activities.',
  },
  {
    name: 'Rog',
    sanskritName: 'à¤°à¥‹à¤—',
    quality: 'inauspicious',
    suitableFor: [],
    description: 'Ruled by Mars. Avoid starting new activities; associated with illness.',
  },
  {
    name: 'Kaal',
    sanskritName: 'à¤•à¤¾à¤²',
    quality: 'inauspicious',
    suitableFor: [],
    description: 'Ruled by Saturn. Avoid auspicious activities during this period.',
  },
  {
    name: 'Udveg',
    sanskritName: 'à¤‰à¤¦à¥à¤µà¥‡à¤—',
    quality: 'inauspicious',
    suitableFor: [],
    description: 'Ruled by Sun. Avoid important decisions; associated with anxiety.',
  },
];
