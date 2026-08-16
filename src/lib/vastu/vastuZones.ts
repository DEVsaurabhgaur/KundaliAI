/**
 * 16 Vastu Energy Zones System
 */

export interface VastuZone {
  code: string;
  name: string;
  attribute: string;
  element: 'Water' | 'Air' | 'Fire' | 'Earth' | 'Space';
}

export const VASTU_16_ZONES: VastuZone[] = [
  { code: 'N', name: 'North', attribute: 'Money & New Opportunities', element: 'Water' },
  { code: 'NNE', name: 'North-North-East', attribute: 'Health & Immunity', element: 'Water' },
  { code: 'NE', name: 'North-East', attribute: 'Clarity of Mind & Wisdom', element: 'Water' },
  { code: 'ENE', name: 'East-North-East', attribute: 'Recreation & Fun', element: 'Air' },
  { code: 'E', name: 'East', attribute: 'Social Connectivity & Networking', element: 'Air' },
  { code: 'ESE', name: 'East-South-East', attribute: 'Churning & Analysis', element: 'Air' },
  { code: 'SE', name: 'South-East', attribute: 'Cash Liquidity & Fire', element: 'Fire' },
  { code: 'SSE', name: 'South-South-East', attribute: 'Confidence & Power', element: 'Fire' },
  { code: 'S', name: 'South', attribute: 'Fame, Relaxed Sleep & Recognition', element: 'Fire' },
  { code: 'SSW', name: 'South-South-West', attribute: 'Disposal & Waste Release', element: 'Earth' },
  { code: 'SW', name: 'South-West', attribute: 'Skill Mastery & Relationships', element: 'Earth' },
  { code: 'WSW', name: 'West-South-West', attribute: 'Education & Savings', element: 'Space' },
  { code: 'W', name: 'West', attribute: 'Profits & Manifested Gains', element: 'Space' },
  { code: 'WNW', name: 'West-North-West', attribute: 'Depression & Detoxification', element: 'Space' },
  { code: 'NW', name: 'North-West', attribute: 'Support & Bank Assistance', element: 'Space' },
  { code: 'NNW', name: 'North-North-West', attribute: 'Attraction & Bodily Appeal', element: 'Water' }
];
