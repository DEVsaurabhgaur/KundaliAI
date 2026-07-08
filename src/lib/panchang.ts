/** Panchang (Hindu almanac) elements calculation */

export interface PanchangData {
  tithi: string;        // Lunar day (1-30)
  vara: string;         // Day of week
  nakshatra: string;    // Lunar mansion
  yoga: string;         // Yoga (1-27)
  karana: string;       // Half lunar day
}

const TITHI_NAMES = [
  'Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami',
  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami',
  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima / Amavasya',
];

const VARA_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const YOGA_NAMES = [
  'Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana',
  'Atiganda', 'Sukarma', 'Dhriti', 'Shula', 'Ganda',
  'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra',
  'Siddhi', 'Vyatipata', 'Variyana', 'Parigha', 'Shiva',
  'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma',
  'Indra', 'Vaidhriti',
];

const KARANA_NAMES = [
  'Bava', 'Balava', 'Kaulava', 'Taitila', 'Garija',
  'Vanija', 'Vishti', 'Shakuni', 'Chatushpada', 'Nagava', 'Kimstughna',
];

/**
 * Calculate approximate Panchang elements for a given date.
 * Note: These are simplified approximations; use Swiss Ephemeris for precise values.
 */
export function calculatePanchang(date: Date): PanchangData {
  const jdn = Math.floor(date.getTime() / 86400000) + 2440588;

  // Tithi: approximate based on lunar cycle
  const lunarDay = Math.floor(((jdn - 2451550.1) % 29.53) / 29.53 * 30) % 30;
  const tithiIndex = lunarDay % 15;
  const tithi = TITHI_NAMES[tithiIndex] ?? 'Pratipada';

  // Vara: day of week
  const vara = VARA_NAMES[date.getDay()];

  // Nakshatra: moon moves ~13.17Â°/day, completes 27 nakshatras in 27.32 days
  const nakshatraIndex = Math.floor(((jdn - 2451545) * 13.17 / 360 * 27) % 27);
  const NAKSHATRA_NAMES = [
    'Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra',
    'Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni',
    'Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha',
    'Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha',
    'Purva Bhadrapada','Uttara Bhadrapada','Revati',
  ];
  const nakshatra = NAKSHATRA_NAMES[Math.abs(nakshatraIndex) % 27];

  // Yoga: sum of sun + moon longitude / 13.333Â°
  const yogaIndex = Math.floor(((jdn * 0.9856 + jdn * 13.176) % 360) / (360 / 27)) % 27;
  const yoga = YOGA_NAMES[Math.abs(yogaIndex) % 27];

  // Karana: half-tithi
  const karanaIndex = (lunarDay * 2) % 11;
  const karana = KARANA_NAMES[karanaIndex] ?? 'Bava';

  return { tithi, vara, nakshatra, yoga, karana };
}
