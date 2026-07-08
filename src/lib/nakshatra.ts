/** Nakshatra (Lunar Mansion) constants for Vedic astrology */

export const NAKSHATRA_NAMES = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishtha', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati',
] as const;

export type NakshatraName = (typeof NAKSHATRA_NAMES)[number];

/** Each nakshatra spans 13Â°20' (800 arcminutes) */
export const NAKSHATRA_SPAN_DEG = 13 + 1 / 3;

/** Ruling planets for each nakshatra (Vimshottari dasha sequence) */
export const NAKSHATRA_LORDS: Record<NakshatraName, string> = {
  'Ashwini': 'Ketu',
  'Bharani': 'Venus',
  'Krittika': 'Sun',
  'Rohini': 'Moon',
  'Mrigashira': 'Mars',
  'Ardra': 'Rahu',
  'Punarvasu': 'Jupiter',
  'Pushya': 'Saturn',
  'Ashlesha': 'Mercury',
  'Magha': 'Ketu',
  'Purva Phalguni': 'Venus',
  'Uttara Phalguni': 'Sun',
  'Hasta': 'Moon',
  'Chitra': 'Mars',
  'Swati': 'Rahu',
  'Vishakha': 'Jupiter',
  'Anuradha': 'Saturn',
  'Jyeshtha': 'Mercury',
  'Mula': 'Ketu',
  'Purva Ashadha': 'Venus',
  'Uttara Ashadha': 'Sun',
  'Shravana': 'Moon',
  'Dhanishtha': 'Mars',
  'Shatabhisha': 'Rahu',
  'Purva Bhadrapada': 'Jupiter',
  'Uttara Bhadrapada': 'Saturn',
  'Revati': 'Mercury',
};

/** Calculate nakshatra from Moon longitude (0-360Â°) */
export function getNakshatraFromDegrees(moonLongitude: number): NakshatraName {
  const normalized = ((moonLongitude % 360) + 360) % 360;
  const index = Math.floor(normalized / NAKSHATRA_SPAN_DEG) % 27;
  return NAKSHATRA_NAMES[index];
}
