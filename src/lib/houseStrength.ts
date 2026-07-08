/** House classification and strength utilities for Vedic astrology */

export type HouseType = 'Kendra' | 'Trikona' | 'Upachaya' | 'Dusthana' | 'Neutral';

/** Classification of the 12 houses */
export const HOUSE_TYPES: Record<number, HouseType> = {
  1:  'Kendra',   // Trikona + Kendra
  2:  'Neutral',
  3:  'Upachaya',
  4:  'Kendra',
  5:  'Trikona',
  6:  'Dusthana',
  7:  'Kendra',
  8:  'Dusthana',
  9:  'Trikona',
  10: 'Kendra',
  11: 'Upachaya',
  12: 'Dusthana',
};

/** Sanskrit names for the 12 Bhavas */
export const BHAVA_NAMES: Record<number, string> = {
  1:  'Tanu Bhava',
  2:  'Dhana Bhava',
  3:  'Sahaja Bhava',
  4:  'Sukha Bhava',
  5:  'Putra Bhava',
  6:  'Ari Bhava',
  7:  'Yuvati Bhava',
  8:  'Ayur Bhava',
  9:  'Dharma Bhava',
  10: 'Karma Bhava',
  11: 'Labha Bhava',
  12: 'Vyaya Bhava',
};

/** Natural significations (Karakatwa) of each house */
export const HOUSE_SIGNIFICATIONS: Record<number, string[]> = {
  1:  ['Self', 'Body', 'Personality', 'Health', 'Appearance'],
  2:  ['Wealth', 'Family', 'Speech', 'Food', 'Values'],
  3:  ['Siblings', 'Courage', 'Communication', 'Short travels', 'Skills'],
  4:  ['Mother', 'Home', 'Happiness', 'Vehicles', 'Land'],
  5:  ['Children', 'Intelligence', 'Creativity', 'Education', 'Romance'],
  6:  ['Enemies', 'Diseases', 'Debts', 'Service', 'Litigation'],
  7:  ['Marriage', 'Partnerships', 'Public life', 'Business', 'Spouse'],
  8:  ['Longevity', 'Transformation', 'Mysteries', 'Inheritance', 'Research'],
  9:  ['Luck', 'Father', 'Religion', 'Higher education', 'Philosophy'],
  10: ['Career', 'Status', 'Authority', 'Fame', 'Government'],
  11: ['Gains', 'Friends', 'Elder siblings', 'Aspirations', 'Social circle'],
  12: ['Losses', 'Moksha', 'Foreign lands', 'Hospitals', 'Spirituality'],
};

/**
 * Returns the house type classification.
 */
export function getHouseType(house: number): HouseType {
  return HOUSE_TYPES[house] ?? 'Neutral';
}

/**
 * Checks if a house is considered benefic (Kendra or Trikona).
 */
export function isBeneficHouse(house: number): boolean {
  const type = getHouseType(house);
  return type === 'Kendra' || type === 'Trikona';
}
