
# KundaliAI - 50 Valuable Commits Script
# Streak maintenance for 2026-07-08

$ErrorActionPreference = "Stop"
$commitCount = 0
$date = "2026-07-08"

function Make-Commit {
    param([string]$msg)
    git add -A
    git commit -m $msg
    $script:commitCount++
    Write-Host "[$script:commitCount/50] $msg" -ForegroundColor Green
}

Write-Host "Starting 50 valuable commits for KundaliAI - $date streak" -ForegroundColor Cyan

# ─── COMMIT 1: Add nakshatra (lunar mansion) constants ───────────────────────
$content = @'
/** Nakshatra (Lunar Mansion) constants for Vedic astrology */

export const NAKSHATRA_NAMES = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishtha', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati',
] as const;

export type NakshatraName = (typeof NAKSHATRA_NAMES)[number];

/** Each nakshatra spans 13°20' (800 arcminutes) */
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

/** Calculate nakshatra from Moon longitude (0-360°) */
export function getNakshatraFromDegrees(moonLongitude: number): NakshatraName {
  const normalized = ((moonLongitude % 360) + 360) % 360;
  const index = Math.floor(normalized / NAKSHATRA_SPAN_DEG) % 27;
  return NAKSHATRA_NAMES[index];
}
'@
Set-Content -Path "src\lib\nakshatra.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add nakshatra (lunar mansion) constants and lord mappings"

# ─── COMMIT 2: Add Vimshottari dasha period durations ────────────────────────
$content = @'
/** Vimshottari Dasha system - 120-year planetary period cycle */

export const DASHA_YEARS: Record<string, number> = {
  'Sun':     6,
  'Moon':    10,
  'Mars':    7,
  'Rahu':    18,
  'Jupiter': 16,
  'Saturn':  19,
  'Mercury': 17,
  'Ketu':    7,
  'Venus':   20,
};

export const DASHA_TOTAL_YEARS = 120;

/** Sequence of dashas in the Vimshottari cycle */
export const DASHA_SEQUENCE = [
  'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter',
  'Saturn', 'Mercury', 'Ketu', 'Venus',
] as const;

export type DashaLord = (typeof DASHA_SEQUENCE)[number];

export interface DashaPeriod {
  lord: DashaLord;
  startDate: Date;
  endDate: Date;
  durationYears: number;
}

/**
 * Calculate remaining dasha balance at birth based on Moon nakshatra position.
 * @param moonLongitude - Moon's longitude in degrees (0-360)
 * @param birthDate - Date of birth
 * @returns Array of dasha periods starting from birth
 */
export function calculateDashaPeriods(moonLongitude: number, birthDate: Date): DashaPeriod[] {
  const NAKSHATRA_SPAN = 13 + 1 / 3;
  const nakshatraLords = [
    'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
    'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
    'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
  ];

  const normalizedMoon = ((moonLongitude % 360) + 360) % 360;
  const nakshatraIndex = Math.floor(normalizedMoon / NAKSHATRA_SPAN) % 27;
  const positionInNakshatra = normalizedMoon - nakshatraIndex * NAKSHATRA_SPAN;
  const fractionElapsed = positionInNakshatra / NAKSHATRA_SPAN;

  const birthLord = nakshatraLords[nakshatraIndex] as DashaLord;
  const birthLordYears = DASHA_YEARS[birthLord];
  const remainingYears = birthLordYears * (1 - fractionElapsed);

  const periods: DashaPeriod[] = [];
  let currentDate = new Date(birthDate);
  const seqStart = DASHA_SEQUENCE.indexOf(birthLord);

  for (let i = 0; i < DASHA_SEQUENCE.length; i++) {
    const lordIndex = (seqStart + i) % DASHA_SEQUENCE.length;
    const lord = DASHA_SEQUENCE[lordIndex];
    const years = i === 0 ? remainingYears : DASHA_YEARS[lord];
    const endDate = new Date(currentDate);
    endDate.setFullYear(endDate.getFullYear() + Math.floor(years));
    endDate.setDate(endDate.getDate() + Math.round((years % 1) * 365.25));
    periods.push({ lord, startDate: new Date(currentDate), endDate, durationYears: years });
    currentDate = new Date(endDate);
  }

  return periods;
}
'@
Set-Content -Path "src\lib\dasha.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Vimshottari dasha period calculation utility"

# ─── COMMIT 3: Add planetary dignity (exaltation/debilitation) constants ──────
$content = @'
/** Planetary dignity tables for Vedic astrology */

export type DignityStatus = 'Exalted' | 'Own Sign' | 'Debilitated' | 'Neutral' | 'Friendly' | 'Enemy';

export interface PlanetDignity {
  exaltation: string;
  debilitation: string;
  ownSigns: string[];
  friendlySigns?: string[];
}

export const PLANET_DIGNITIES: Record<string, PlanetDignity> = {
  Sun: {
    exaltation: 'Aries',
    debilitation: 'Libra',
    ownSigns: ['Leo'],
  },
  Moon: {
    exaltation: 'Taurus',
    debilitation: 'Scorpio',
    ownSigns: ['Cancer'],
  },
  Mars: {
    exaltation: 'Capricorn',
    debilitation: 'Cancer',
    ownSigns: ['Aries', 'Scorpio'],
  },
  Mercury: {
    exaltation: 'Virgo',
    debilitation: 'Pisces',
    ownSigns: ['Gemini', 'Virgo'],
  },
  Jupiter: {
    exaltation: 'Cancer',
    debilitation: 'Capricorn',
    ownSigns: ['Sagittarius', 'Pisces'],
  },
  Venus: {
    exaltation: 'Pisces',
    debilitation: 'Virgo',
    ownSigns: ['Taurus', 'Libra'],
  },
  Saturn: {
    exaltation: 'Libra',
    debilitation: 'Aries',
    ownSigns: ['Capricorn', 'Aquarius'],
  },
};

/**
 * Determine a planet's dignity status given its current sign placement.
 */
export function getPlanetDignity(planet: string, sign: string): DignityStatus {
  const dignity = PLANET_DIGNITIES[planet];
  if (!dignity) return 'Neutral';
  if (dignity.exaltation === sign) return 'Exalted';
  if (dignity.debilitation === sign) return 'Debilitated';
  if (dignity.ownSigns.includes(sign)) return 'Own Sign';
  return 'Neutral';
}
'@
Set-Content -Path "src\lib\dignity.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add planetary dignity (exaltation/debilitation) lookup table"

# ─── COMMIT 4: Add yogas (auspicious planetary combinations) ─────────────────
$content = @'
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
    sanskritName: 'हंस योग',
    description: 'Jupiter in Kendra (1,4,7,10) in own or exalted sign. Grants wisdom, spiritual knowledge, and prosperity.',
    type: 'auspicious',
  },
  {
    name: 'Malavya Yoga',
    sanskritName: 'मालव्य योग',
    description: 'Venus in Kendra in own or exalted sign. Bestows beauty, luxury, artistic talent, and marital bliss.',
    type: 'auspicious',
  },
  {
    name: 'Ruchaka Yoga',
    sanskritName: 'रुचक योग',
    description: 'Mars in Kendra in own or exalted sign. Gives courage, leadership, physical strength, and fame.',
    type: 'auspicious',
  },
  {
    name: 'Bhadra Yoga',
    sanskritName: 'भद्र योग',
    description: 'Mercury in Kendra in own or exalted sign. Confers intelligence, business acumen, and communication skills.',
    type: 'auspicious',
  },
  {
    name: 'Shasha Yoga',
    sanskritName: 'शश योग',
    description: 'Saturn in Kendra in own or exalted sign. Provides discipline, longevity, service-mindedness, and authority.',
    type: 'auspicious',
  },
];

export const DHANA_YOGAS: Yoga[] = [
  {
    name: 'Lakshmi Yoga',
    sanskritName: 'लक्ष्मी योग',
    description: 'Lord of 9th in own sign and Venus in Kendra/Trikona. Grants exceptional wealth and fortune.',
    type: 'auspicious',
  },
  {
    name: 'Chandra-Mangal Yoga',
    sanskritName: 'चंद्र-मंगल योग',
    description: 'Moon and Mars conjunction or mutual aspect. Indicates wealth through bold financial decisions.',
    type: 'mixed',
  },
];

export const DOSHA_YOGAS: Yoga[] = [
  {
    name: 'Mangal Dosha',
    sanskritName: 'मंगल दोष',
    description: 'Mars placed in houses 1, 2, 4, 7, 8, or 12. Can affect marital harmony; remedies are recommended.',
    type: 'inauspicious',
  },
  {
    name: 'Kaal Sarp Dosha',
    sanskritName: 'काल सर्प दोष',
    description: 'All planets hemmed between Rahu and Ketu. May cause delays and obstacles; remedies advised.',
    type: 'inauspicious',
  },
  {
    name: 'Shani Sade Sati',
    sanskritName: 'शनि साढ़े साती',
    description: 'Saturn transiting over natal Moon sign and adjacent signs (7.5 years). Period of testing and transformation.',
    type: 'mixed',
  },
];
'@
Set-Content -Path "src\lib\yogas.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Vedic yoga (planetary combination) definitions and descriptions"

# ─── COMMIT 5: Extend types with nakshatra and dasha fields ──────────────────
$content = @'
/** Shared TypeScript types for KundaliAI */

export interface BirthDetails {
  name: string;
  date: string;
  time: string;
  place: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface PlanetaryPosition {
  planet: string;
  house: number;
  rashi: string;
  degrees: number;
  isRetrograde: boolean;
  nakshatra?: string;
  nakshatraPada?: number;
  dignity?: string;
}

export interface KundaliData {
  birthDetails: BirthDetails;
  ascendant: string;
  ascendantDegree?: number;
  planets: PlanetaryPosition[];
  generatedAt: string;
  moonNakshatra?: string;
  currentDasha?: string;
  yogas?: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

export interface DashaSummary {
  lord: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export type PlanetName = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn' | 'Rahu (North Node)' | 'Ketu (South Node)';
export type RashiName = 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';
export type HouseNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
'@
Set-Content -Path "src\lib\types.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: extend KundaliData type with nakshatra, dasha, and yoga fields"

# ─── COMMIT 6: Add ayanamsha (sidereal correction) calculator ────────────────
$content = @'
/** Ayanamsha calculation for Vedic (sidereal) astrology */

export type AyanamshaSystem = 'Lahiri' | 'Raman' | 'KP' | 'Fagan-Bradley';

/** Base ayanamsha values at J2000.0 (2000-01-01 12:00 TT) */
const AYANAMSHA_BASE: Record<AyanamshaSystem, number> = {
  'Lahiri':        23.85178,
  'Raman':         22.46098,
  'KP':            23.86383,
  'Fagan-Bradley': 24.74207,
};

/** Annual precession rate in degrees */
const PRECESSION_RATE = 50.2564 / 3600; // ~0.01396 degrees/year

/**
 * Calculate Julian Day Number from a calendar date.
 */
export function dateToJulianDay(year: number, month: number, day: number, hour = 12): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y +
    Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  return jdn + (hour - 12) / 24;
}

const J2000 = 2451545.0; // Julian Day for 2000-01-01 12:00 TT

/**
 * Calculate ayanamsha (sidereal offset) for a given date.
 * @param date - The date for calculation
 * @param system - Ayanamsha system to use (default: Lahiri)
 * @returns Ayanamsha value in degrees
 */
export function calculateAyanamsha(date: Date, system: AyanamshaSystem = 'Lahiri'): number {
  const jd = dateToJulianDay(date.getFullYear(), date.getMonth() + 1, date.getDate(), 12);
  const yearsSinceJ2000 = (jd - J2000) / 365.25;
  const base = AYANAMSHA_BASE[system];
  return base + yearsSinceJ2000 * PRECESSION_RATE;
}

/**
 * Convert tropical longitude to sidereal (Vedic) longitude.
 */
export function tropicalToSidereal(tropicalLongitude: number, date: Date, system: AyanamshaSystem = 'Lahiri'): number {
  const ayanamsha = calculateAyanamsha(date, system);
  return ((tropicalLongitude - ayanamsha) % 360 + 360) % 360;
}
'@
Set-Content -Path "src\lib\ayanamsha.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add ayanamsha (sidereal correction) calculator with Lahiri/Raman/KP support"

# ─── COMMIT 7: Add house strength (Shadbala) utility ─────────────────────────
$content = @'
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
'@
Set-Content -Path "src\lib\houseStrength.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add house classification (Kendra/Trikona/Dusthana) and Bhava significations"

# ─── COMMIT 8: Improve formatters with degree/minute/second formatting ────────
$content = @'
/** Display formatters for KundaliAI */

/**
 * Format degrees as decimal (e.g., "23.45°")
 */
export function formatDegrees(deg: number): string {
  return deg.toFixed(2) + String.fromCharCode(176);
}

/**
 * Format degrees in degrees°minutes'seconds" notation
 */
export function formatDMS(deg: number): string {
  const d = Math.floor(Math.abs(deg));
  const m = Math.floor((Math.abs(deg) - d) * 60);
  const s = Math.round(((Math.abs(deg) - d) * 60 - m) * 60);
  return `${d}°${m}'${s}"`;
}

/**
 * Format birth date in long Indian locale format
 */
export function formatBirthDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
}

/**
 * Format time string (HH:mm) to 12-hour format
 */
export function formatTime12h(time: string): string {
  const parts = time.split(':').map(Number);
  const h = parts[0]; const m = parts[1];
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return hour12 + ':' + String(m).padStart(2, '0') + ' ' + ampm;
}

/**
 * Format house number with ordinal suffix
 */
export function formatHouseLabel(house: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const suffix = house <= 3 ? suffixes[house] : suffixes[0];
  return house + suffix + ' House';
}

/**
 * Format amount as Indian Rupees
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);
}

/**
 * Format a Date object to a relative time string (e.g., "2 days ago")
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 60) return 'just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} hour${diffHr !== 1 ? 's' : ''} ago`;
  const diffDays = Math.floor(diffHr / 24);
  return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
}
'@
Set-Content -Path "src\lib\formatters.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: add DMS formatter, relative time formatter, and JSDoc to formatters.ts"

# ─── COMMIT 9: Extend string utilities with more helpers ─────────────────────
$content = @'
/** String utilities for KundaliAI */

export function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function titleCase(s: string): string {
  return s.replace(/\b\w/g, (ch) => ch.toUpperCase());
}

export function truncate(s: string, maxLen: number): string {
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen - 3) + '...';
}

export const planetSanskrit: Record<string, string> = {
  Sun:                  'Surya',
  Moon:                 'Chandra',
  Mars:                 'Mangal',
  Mercury:              'Budha',
  Jupiter:              'Guru',
  Venus:                'Shukra',
  Saturn:               'Shani',
  'Rahu (North Node)':  'Rahu',
  'Ketu (South Node)':  'Ketu',
};

export function getSanskritName(planet: string): string {
  return planetSanskrit[planet] ?? planet;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Slugify a string for URL-safe use.
 */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Check if a string contains only valid name characters.
 */
export function isValidName(name: string): boolean {
  return /^[a-zA-Z\u0900-\u097F\s.'-]{2,100}$/.test(name.trim());
}

/**
 * Pad a number with leading zeros to a given width.
 */
export function zeroPad(n: number, width: number): string {
  return String(n).padStart(width, '0');
}
'@
Set-Content -Path "src\lib\stringUtils.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: add titleCase, slugify, isValidName, zeroPad to stringUtils"

# ─── COMMIT 10: Extend date utilities ────────────────────────────────────────
$content = @'
/** Date utilities for Vedic astrology calculations */

export function formatDateDMY(date: Date): string {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return d + '/' + m + '/' + y;
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

export function normalizeDegrees(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

/**
 * Add a given number of years (with fractional support) to a Date.
 */
export function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  const wholeYears = Math.floor(years);
  const fractionalDays = Math.round((years - wholeYears) * 365.25);
  result.setFullYear(result.getFullYear() + wholeYears);
  result.setDate(result.getDate() + fractionalDays);
  return result;
}

/**
 * Get the difference in years between two dates (decimal).
 */
export function yearsBetween(start: Date, end: Date): number {
  return (end.getTime() - start.getTime()) / (365.25 * 24 * 3600 * 1000);
}

/**
 * Format a Date to ISO date string (YYYY-MM-DD).
 */
export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Parse a date string in YYYY-MM-DD format safely.
 */
export function parseISODate(dateStr: string): Date | null {
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const d = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return isNaN(d.getTime()) ? null : d;
}
'@
Set-Content -Path "src\lib\dateUtils.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: add addYears, yearsBetween, toISODate, parseISODate to dateUtils"

# ─── COMMIT 11: Add error messages enumeration ────────────────────────────────
$content = @'
/** Centralized error messages for KundaliAI */

export const ERROR_MESSAGES = {
  // Validation
  INVALID_NAME:        'Please enter a valid name (2-100 characters, letters only).',
  INVALID_DATE:        'Please enter a valid birth date.',
  INVALID_TIME:        'Please enter a valid birth time in HH:MM format.',
  INVALID_PLACE:       'Please enter a valid birth place.',
  INVALID_LATITUDE:    'Latitude must be between -90 and 90 degrees.',
  INVALID_LONGITUDE:   'Longitude must be between -180 and 180 degrees.',
  DATE_IN_FUTURE:      'Birth date cannot be in the future.',
  DATE_TOO_OLD:        'Birth date must be after 1900.',

  // API
  API_UNAVAILABLE:     'The interpretation service is temporarily unavailable. Please try again.',
  API_TIMEOUT:         'The request timed out. Please check your connection and try again.',
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please wait a moment before trying again.',
  NETWORK_ERROR:       'A network error occurred. Please check your connection.',

  // Geocoding
  PLACE_NOT_FOUND:     'Could not find the location. Please try a different place name.',
  GEOCODING_FAILED:    'Location lookup failed. You can enter coordinates manually.',

  // Payment
  PAYMENT_FAILED:      'Payment could not be processed. Please try again or use a different method.',
  SESSION_EXPIRED:     'Your session has expired. Please refresh the page.',

  // Generic
  UNKNOWN_ERROR:       'An unexpected error occurred. Please refresh the page.',
  FEATURE_UNAVAILABLE: 'This feature is currently unavailable.',
} as const;

export type ErrorMessageKey = keyof typeof ERROR_MESSAGES;

export function getErrorMessage(key: ErrorMessageKey): string {
  return ERROR_MESSAGES[key];
}
'@
Set-Content -Path "src\lib\errorMessages.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: centralize all error messages with typed constants"

# ─── COMMIT 12: Add planet color palette ─────────────────────────────────────
$content = @'
/** Planet color palette for KundaliAI visualizations */

export const PLANET_COLORS: Record<string, string> = {
  Sun:                  '#FFB347', // warm amber-orange
  Moon:                 '#C8D8E8', // silvery blue-white
  Mars:                 '#E85D4A', // fiery red
  Mercury:              '#7EC8A4', // mercury green
  Jupiter:              '#F0C060', // golden yellow
  Venus:                '#F4A7B9', // rose pink
  Saturn:               '#9B8EA0', // dusty purple-grey
  'Rahu (North Node)':  '#4A5568', // dark slate
  'Ketu (South Node)':  '#B57C6B', // earthy brown
};

export const PLANET_GLOWS: Record<string, string> = {
  Sun:                  'rgba(255,179,71,0.4)',
  Moon:                 'rgba(200,216,232,0.3)',
  Mars:                 'rgba(232,93,74,0.4)',
  Mercury:              'rgba(126,200,164,0.35)',
  Jupiter:              'rgba(240,192,96,0.4)',
  Venus:                'rgba(244,167,185,0.4)',
  Saturn:               'rgba(155,142,160,0.35)',
  'Rahu (North Node)':  'rgba(74,85,104,0.3)',
  'Ketu (South Node)':  'rgba(181,124,107,0.3)',
};

export const RASHI_COLORS: Record<string, string> = {
  Aries:       '#E85D4A',
  Taurus:      '#7EC8A4',
  Gemini:      '#F0C060',
  Cancer:      '#C8D8E8',
  Leo:         '#FFB347',
  Virgo:       '#98D4A3',
  Libra:       '#F4A7B9',
  Scorpio:     '#9B4A5A',
  Sagittarius: '#7EB8D4',
  Capricorn:   '#9B8EA0',
  Aquarius:    '#6ABFDB',
  Pisces:      '#A78BCA',
};

/**
 * Get the color for a planet by its abbreviated name.
 */
export function getPlanetColor(planetKey: string): string {
  const full: Record<string, string> = {
    Su: 'Sun', Mo: 'Moon', Ma: 'Mars', Me: 'Mercury',
    Ju: 'Jupiter', Ve: 'Venus', Sa: 'Saturn', Ra: 'Rahu (North Node)', Ke: 'Ketu (South Node)',
  };
  const planet = full[planetKey] ?? planetKey;
  return PLANET_COLORS[planet] ?? '#ffffff';
}
'@
Set-Content -Path "src\lib\colors.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: expand planet and rashi color palette with glow variants"

# ─── COMMIT 13: Add storage key constants ─────────────────────────────────────
$content = @'
/** LocalStorage/SessionStorage key constants for KundaliAI */

export const STORAGE_KEYS = {
  LAST_BIRTH_DETAILS:   'kundali_last_birth_details',
  CHART_HISTORY:        'kundali_chart_history',
  PREFERRED_LANGUAGE:   'kundali_language',
  AYANAMSHA_SYSTEM:     'kundali_ayanamsha',
  THEME:                'kundali_theme',
  SESSION_TOKEN:        'kundali_session_token',
  GENERATION_COUNT:     'kundali_generation_count',
  LAST_GENERATED_AT:    'kundali_last_generated_at',
  DISMISSED_BANNERS:    'kundali_dismissed_banners',
  REFERRAL_CODE:        'kundali_referral',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/**
 * Safely get a JSON value from localStorage.
 */
export function getStoredJSON<T>(key: StorageKey): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Safely set a JSON value in localStorage.
 */
export function setStoredJSON<T>(key: StorageKey, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be full or unavailable (e.g., private browsing)
  }
}

/**
 * Remove a key from localStorage.
 */
export function removeStored(key: StorageKey): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore
  }
}
'@
Set-Content -Path "src\lib\storageKeys.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: add typed localStorage helpers (getStoredJSON/setStoredJSON) to storageKeys"

# ─── COMMIT 14: Add logger with levels ────────────────────────────────────────
$content = @'
/** Lightweight logger for KundaliAI (no-op in production) */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDev = import.meta.env?.DEV ?? false;

function formatMessage(level: LogLevel, tag: string, message: string): string {
  const ts = new Date().toISOString().slice(11, 23);
  return `[${ts}] [${level.toUpperCase()}] [${tag}] ${message}`;
}

export const logger = {
  debug(tag: string, message: string, ...args: unknown[]): void {
    if (isDev) console.debug(formatMessage('debug', tag, message), ...args);
  },
  info(tag: string, message: string, ...args: unknown[]): void {
    if (isDev) console.info(formatMessage('info', tag, message), ...args);
  },
  warn(tag: string, message: string, ...args: unknown[]): void {
    console.warn(formatMessage('warn', tag, message), ...args);
  },
  error(tag: string, message: string, ...args: unknown[]): void {
    console.error(formatMessage('error', tag, message), ...args);
  },
};

export default logger;
'@
Set-Content -Path "src\lib\logger.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: improve logger with structured formatting and dev-only filtering"

# ─── COMMIT 15: Add constants for Pancha Mahapurusha yogas ───────────────────
$content = @'
/** Application-wide constants for KundaliAI */

export const APP_NAME = 'KundaliAI';
export const APP_VERSION = '1.1.0';
export const APP_DESCRIPTION = 'AI-powered Vedic astrology kundali generator';
export const APP_AUTHOR = 'KundaliAI Team';
export const APP_URL = 'https://kundali.ai';

export const RASHI_NAMES = [
  'Aries (Mesh)', 'Taurus (Vrishabh)', 'Gemini (Mithun)', 'Cancer (Kark)',
  'Leo (Simha)', 'Virgo (Kanya)', 'Libra (Tula)', 'Scorpio (Vrishchik)',
  'Sagittarius (Dhanu)', 'Capricorn (Makar)', 'Aquarius (Kumbh)', 'Pisces (Meen)',
] as const;

export const RASHI_SHORT = [
  'Ari', 'Tau', 'Gem', 'Can', 'Leo', 'Vir',
  'Lib', 'Sco', 'Sag', 'Cap', 'Aqu', 'Pis',
] as const;

export const NAVAGRAHA = [
  'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn',
  'Rahu (North Node)', 'Ketu (South Node)',
] as const;

export const HOUSE_NAMES = [
  'Lagna (Ascendant)', 'Dhana (Wealth)', 'Sahaja (Siblings)', 'Sukha (Home)',
  'Putra (Children)', 'Ari (Enemies)', 'Kalatra (Marriage)', 'Mrityu (Transformation)',
  'Dharma (Fortune)', 'Karma (Career)', 'Labha (Gains)', 'Vyaya (Loss)',
] as const;

/** Kendra houses (angular - most powerful) */
export const KENDRA_HOUSES = [1, 4, 7, 10] as const;

/** Trikona houses (trinal - highly auspicious) */
export const TRIKONA_HOUSES = [1, 5, 9] as const;

/** Dusthana houses (malefic - challenging) */
export const DUSTHANA_HOUSES = [6, 8, 12] as const;

/** Upachaya houses (growing - improves over time) */
export const UPACHAYA_HOUSES = [3, 6, 10, 11] as const;

export const API_RATE_LIMIT = 10;
export const MAX_NAME_LENGTH = 100;
export const MAX_HISTORY_ITEMS = 10;
export const GEOCODING_DEBOUNCE_MS = 400;
export const CHART_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
'@
Set-Content -Path "src\lib\constants.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: add Kendra/Trikona/Dusthana house arrays and cache TTL constants"

# ─── COMMIT 16: Add rate limiter improvements ─────────────────────────────────
$content = @'
/** Per-session rate limiter for KundaliAI API calls */

interface RateLimiterOptions {
  maxRequests: number;
  windowMs: number;
  storageKey?: string;
}

interface RateLimiterState {
  count: number;
  windowStart: number;
}

export class RateLimiter {
  private maxRequests: number;
  private windowMs: number;
  private storageKey: string;

  constructor(options: RateLimiterOptions) {
    this.maxRequests = options.maxRequests;
    this.windowMs = options.windowMs;
    this.storageKey = options.storageKey ?? 'kundali_rate_limit';
  }

  private getState(): RateLimiterState {
    try {
      const raw = sessionStorage.getItem(this.storageKey);
      if (raw) return JSON.parse(raw) as RateLimiterState;
    } catch { /* ignore */ }
    return { count: 0, windowStart: Date.now() };
  }

  private setState(state: RateLimiterState): void {
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify(state));
    } catch { /* ignore */ }
  }

  /**
   * Check if a new request is allowed.
   * @returns true if allowed, false if rate limit exceeded
   */
  isAllowed(): boolean {
    const now = Date.now();
    const state = this.getState();

    if (now - state.windowStart > this.windowMs) {
      this.setState({ count: 1, windowStart: now });
      return true;
    }

    if (state.count >= this.maxRequests) return false;

    this.setState({ count: state.count + 1, windowStart: state.windowStart });
    return true;
  }

  /** Returns remaining requests in the current window. */
  getRemainingRequests(): number {
    const now = Date.now();
    const state = this.getState();
    if (now - state.windowStart > this.windowMs) return this.maxRequests;
    return Math.max(0, this.maxRequests - state.count);
  }

  /** Returns milliseconds until the window resets. */
  getMsUntilReset(): number {
    const state = this.getState();
    const elapsed = Date.now() - state.windowStart;
    return Math.max(0, this.windowMs - elapsed);
  }

  /** Reset the rate limiter state. */
  reset(): void {
    try {
      sessionStorage.removeItem(this.storageKey);
    } catch { /* ignore */ }
  }
}

export const defaultRateLimiter = new RateLimiter({ maxRequests: 10, windowMs: 60_000 });
'@
Set-Content -Path "src\lib\rate-limiter.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: improve RateLimiter class with getRemainingRequests and getMsUntilReset"

# ─── COMMIT 17: Add planet aspect calculation ─────────────────────────────────
$content = @'
/** Vedic planetary aspects (Drishti) calculator */

export interface Aspect {
  fromPlanet: string;
  toPlanet: string;
  fromHouse: number;
  toHouse: number;
  aspectType: string;
  strength: 'full' | 'three-quarter' | 'half' | 'quarter';
}

/**
 * Vedic aspects — planets cast aspects on specific houses from their position.
 * All planets have full aspect on 7th house from themselves.
 * Special aspects:
 *   Mars: 4th and 8th
 *   Jupiter: 5th and 9th
 *   Saturn: 3rd and 10th
 */
const SPECIAL_ASPECTS: Record<string, number[]> = {
  Mars:    [4, 8],
  Jupiter: [5, 9],
  Saturn:  [3, 10],
  Rahu:    [5, 9],  // Vedic tradition gives Rahu Jupiter-like aspects
  Ketu:    [5, 9],
};

/**
 * Check if planet A aspects planet B given their house positions.
 */
export function hasAspect(planetA: string, houseA: number, houseB: number): boolean {
  // All planets aspect the 7th house from themselves
  if (((houseB - houseA + 12 - 1) % 12) + 1 === 7) return true;

  const specials = SPECIAL_ASPECTS[planetA] ?? [];
  for (const offset of specials) {
    const aspectedHouse = ((houseA + offset - 2) % 12) + 1;
    if (aspectedHouse === houseB) return true;
  }
  return false;
}

/**
 * Calculate all aspects in a chart from a list of planet house placements.
 */
export function calculateAspects(
  planets: Array<{ planet: string; house: number }>
): Aspect[] {
  const aspects: Aspect[] = [];

  for (let i = 0; i < planets.length; i++) {
    for (let j = 0; j < planets.length; j++) {
      if (i === j) continue;
      const { planet: pA, house: hA } = planets[i];
      const { planet: pB, house: hB } = planets[j];

      if (hasAspect(pA, hA, hB)) {
        const offset = ((hB - hA + 12 - 1) % 12) + 1;
        const isSpecial = (SPECIAL_ASPECTS[pA] ?? []).includes(offset);
        aspects.push({
          fromPlanet: pA,
          toPlanet: pB,
          fromHouse: hA,
          toHouse: hB,
          aspectType: offset === 7 ? '7th' : `${offset}th`,
          strength: isSpecial ? 'three-quarter' : 'full',
        });
      }
    }
  }

  return aspects;
}
'@
Set-Content -Path "src\lib\aspects.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Vedic planetary aspect (Drishti) calculator with special Mars/Jupiter/Saturn aspects"

# ─── COMMIT 18: Add Mangal dosha checker ──────────────────────────────────────
$content = @'
/** Mangal Dosha (Mars affliction) checker for KundaliAI */

/**
 * Houses where Mars placement causes Mangal Dosha.
 * Classical: 1, 2, 4, 7, 8, 12
 * South Indian tradition: also includes 3rd house
 */
const MANGAL_DOSHA_HOUSES_CLASSICAL = [1, 2, 4, 7, 8, 12] as const;
const MANGAL_DOSHA_HOUSES_SOUTH = [1, 2, 3, 4, 7, 8, 12] as const;

export type MangalDoshaResult = {
  hasDosha: boolean;
  marsHouse: number | null;
  severity: 'high' | 'medium' | 'low' | 'none';
  remedy: string;
  note: string;
};

/**
 * Determine if a chart has Mangal Dosha and its severity.
 * @param marsHouse - House number where Mars is placed (1-12)
 * @param lagnaSign - Ascendant sign (for cancellation checks)
 * @param tradition - 'classical' or 'south' (default: 'classical')
 */
export function checkMangalDosha(
  marsHouse: number,
  lagnaSign?: string,
  tradition: 'classical' | 'south' = 'classical'
): MangalDoshaResult {
  const doshaHouses = tradition === 'south'
    ? MANGAL_DOSHA_HOUSES_SOUTH
    : MANGAL_DOSHA_HOUSES_CLASSICAL;

  const hasDosha = (doshaHouses as readonly number[]).includes(marsHouse);

  if (!hasDosha) {
    return {
      hasDosha: false,
      marsHouse,
      severity: 'none',
      remedy: '',
      note: 'No Mangal Dosha present. Mars is in a neutral position.',
    };
  }

  // Severity assessment
  let severity: 'high' | 'medium' | 'low' = 'medium';
  if (marsHouse === 7 || marsHouse === 8) severity = 'high';
  if (marsHouse === 2 || marsHouse === 4) severity = 'medium';
  if (marsHouse === 1 || marsHouse === 12) severity = 'low';

  // Cancellation: Mars in own signs (Aries/Scorpio) or exalted (Capricorn)
  const cancellationSigns = ['Aries', 'Scorpio', 'Capricorn'];
  if (lagnaSign && cancellationSigns.includes(lagnaSign)) severity = 'low';

  const remedies: Record<string, string> = {
    high:   'Perform Mangal puja on Tuesdays; wear red coral (after consultation); chant Mangal Beej Mantra.',
    medium: 'Observe Tuesday fast; donate red lentils; perform Hanuman Chalisa recitation.',
    low:    'Light a ghee lamp on Tuesdays; recite Mangal mantra 108 times.',
  };

  return {
    hasDosha: true,
    marsHouse,
    severity,
    remedy: remedies[severity],
    note: `Mars in ${marsHouse}${['st','nd','rd','th'][Math.min(marsHouse,4)-1] ?? 'th'} house creates ${severity}-severity Mangal Dosha.`,
  };
}
'@
Set-Content -Path "src\lib\mangalDosha.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Mangal Dosha checker with severity assessment and remedies"

# ─── COMMIT 19: Add Kaal Sarp dosha checker ───────────────────────────────────
$content = @'
/** Kaal Sarp Dosha checker — all planets hemmed between Rahu and Ketu */

export interface KaalSarpResult {
  hasDosha: boolean;
  type: string | null;
  description: string;
  severity: 'partial' | 'full' | 'none';
  remedy: string;
}

const KAAL_SARP_TYPES: Record<number, string> = {
  1:  'Anant',
  2:  'Kulik',
  3:  'Vasuki',
  4:  'Shankhapal',
  5:  'Padma',
  6:  'Mahapadma',
  7:  'Takshak',
  8:  'Karkotak',
  9:  'Shankhanaad',
  10: 'Patak',
  11: 'Vishakata',
  12: 'Sheshnag',
};

/**
 * Check for Kaal Sarp Dosha.
 * @param planetHouses - Map of planet name to house number
 */
export function checkKaalSarpDosha(
  planetHouses: Record<string, number>
): KaalSarpResult {
  const rahuHouse = planetHouses['Rahu'] ?? planetHouses['Rahu (North Node)'];
  const ketuHouse = planetHouses['Ketu'] ?? planetHouses['Ketu (South Node)'];

  if (!rahuHouse || !ketuHouse) {
    return { hasDosha: false, type: null, severity: 'none', description: 'Rahu/Ketu positions unknown.', remedy: '' };
  }

  const otherPlanets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn']
    .map(p => planetHouses[p])
    .filter(Boolean);

  // Check if all planets fall between Rahu and Ketu (going in one direction)
  let allBetweenRahuToKetu = true;
  let allBetweenKetuToRahu = true;

  for (const house of otherPlanets) {
    const rToK = ((ketuHouse - rahuHouse + 12) % 12);
    const posFromRahu = ((house - rahuHouse + 12) % 12);
    if (posFromRahu > rToK) allBetweenRahuToKetu = false;
    if (posFromRahu < rToK || posFromRahu === 0) allBetweenKetuToRahu = false;
  }

  const hasDosha = allBetweenRahuToKetu || allBetweenKetuToRahu;

  if (!hasDosha) {
    return {
      hasDosha: false, type: null, severity: 'none',
      description: 'No Kaal Sarp Dosha. Planets are not hemmed between Rahu and Ketu.',
      remedy: '',
    };
  }

  const typeName = KAAL_SARP_TYPES[rahuHouse] ?? 'Unknown';

  return {
    hasDosha: true,
    type: typeName,
    severity: 'full',
    description: `${typeName} Kaal Sarp Dosha — Rahu in ${rahuHouse}th house, Ketu in ${ketuHouse}th house. All planets are hemmed between them, potentially causing delays, obstacles, and unexpected reversals.`,
    remedy: 'Perform Nag Panchami puja; recite Rahu/Ketu mantras; visit Trimbakeshwar Jyotirlinga for Kaal Sarp puja.',
  };
}
'@
Set-Content -Path "src\lib\kaalSarp.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Kaal Sarp Dosha checker with 12 type classifications"

# ─── COMMIT 20: Add chart history hook ───────────────────────────────────────
$content = @'
/** useChartHistory — persist and retrieve recent kundali chart generations */
import { useState, useCallback } from 'react';
import { getStoredJSON, setStoredJSON, STORAGE_KEYS } from '../lib/storageKeys';
import { MAX_HISTORY_ITEMS } from '../lib/constants';

export interface ChartHistoryItem {
  id: string;
  name: string;
  date: string;
  place: string;
  generatedAt: string;
  ascendant: string;
}

export function useChartHistory() {
  const [history, setHistory] = useState<ChartHistoryItem[]>(() => {
    return getStoredJSON<ChartHistoryItem[]>(STORAGE_KEYS.CHART_HISTORY) ?? [];
  });

  const addToHistory = useCallback((item: Omit<ChartHistoryItem, 'id'>) => {
    setHistory(prev => {
      const newItem: ChartHistoryItem = {
        ...item,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      };
      const updated = [newItem, ...prev].slice(0, MAX_HISTORY_ITEMS);
      setStoredJSON(STORAGE_KEYS.CHART_HISTORY, updated);
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setStoredJSON(STORAGE_KEYS.CHART_HISTORY, []);
  }, []);

  const removeFromHistory = useCallback((id: string) => {
    setHistory(prev => {
      const updated = prev.filter(item => item.id !== id);
      setStoredJSON(STORAGE_KEYS.CHART_HISTORY, updated);
      return updated;
    });
  }, []);

  return { history, addToHistory, clearHistory, removeFromHistory };
}
'@
Set-Content -Path "src\hooks\useChartHistory.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useChartHistory hook for persistent chart generation history"

# ─── COMMIT 21: Add useDebounce hook ─────────────────────────────────────────
$content = @'
/** useDebounce — debounce a value by a given delay */
import { useState, useEffect } from 'react';

/**
 * Returns a debounced version of the given value.
 * The returned value only updates after the specified delay without further changes.
 *
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 400ms)
 */
export function useDebounce<T>(value: T, delay = 400): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
'@
Set-Content -Path "src\hooks\useDebounce.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useDebounce hook for input debouncing"

# ─── COMMIT 22: Add useLocalStorage hook ─────────────────────────────────────
$content = @'
/** useLocalStorage — typed localStorage hook with SSR safety */
import { useState, useCallback } from 'react';

/**
 * A React hook to synchronize state with localStorage.
 * @param key - The localStorage key
 * @param initialValue - Default value if key is not found
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue(prev => {
      const resolved = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
      try {
        localStorage.setItem(key, JSON.stringify(resolved));
      } catch { /* Ignore quota errors */ }
      return resolved;
    });
  }, [key]);

  const removeValue = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch { /* Ignore */ }
    setStoredValue(initialValue);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
'@
Set-Content -Path "src\hooks\useLocalStorage.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useLocalStorage hook with typed get/set/remove interface"

# ─── COMMIT 23: Add useClipboard hook ────────────────────────────────────────
$content = @'
/** useClipboard — copy text to clipboard with feedback state */
import { useState, useCallback } from 'react';

export interface UseClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<void>;
  error: string | null;
}

/**
 * Hook to copy text to the clipboard.
 * @param resetDelay - How long (ms) to show the "copied" state before resetting (default: 2000)
 */
export function useClipboard(resetDelay = 2000): UseClipboardReturn {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    setError(null);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to copy');
      setCopied(false);
    }
  }, [resetDelay]);

  return { copied, copy, error };
}
'@
Set-Content -Path "src\hooks\useClipboard.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useClipboard hook with fallback for older browsers"

# ─── COMMIT 24: Add useCountdown hook ────────────────────────────────────────
$content = @'
/** useCountdown — countdown timer hook for rate limit feedback */
import { useState, useEffect, useRef } from 'react';

export interface UseCountdownReturn {
  seconds: number;
  isRunning: boolean;
  start: (seconds: number) => void;
  stop: () => void;
  reset: () => void;
}

/**
 * A countdown timer hook.
 * Useful for showing users how long until they can make another request.
 */
export function useCountdown(): UseCountdownReturn {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const start = (initialSeconds: number) => {
    stop();
    setSeconds(initialSeconds);
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          stop();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => () => stop(), []);

  return { seconds, isRunning, start, stop, reset };
}
'@
Set-Content -Path "src\hooks\useCountdown.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useCountdown hook for rate limit feedback timers"

# ─── COMMIT 25: Add useWindowSize hook ───────────────────────────────────────
$content = @'
/** useWindowSize — track browser window dimensions reactively */
import { useState, useEffect } from 'react';

export interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

/**
 * Returns the current window dimensions and responsive breakpoint flags.
 * Automatically updates on resize.
 */
export function useWindowSize(): WindowSize {
  const getSize = (): WindowSize => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
      isMobile:  width < 640,
      isTablet:  width >= 640 && width < 1024,
      isDesktop: width >= 1024,
    };
  };

  const [size, setSize] = useState<WindowSize>(() => {
    if (typeof window === 'undefined') {
      return { width: 1280, height: 800, isMobile: false, isTablet: false, isDesktop: true };
    }
    return getSize();
  });

  useEffect(() => {
    const handler = () => setSize(getSize());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}
'@
Set-Content -Path "src\hooks\useWindowSize.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useWindowSize hook with mobile/tablet/desktop breakpoint flags"

# ─── COMMIT 26: Add useDarkMode hook ─────────────────────────────────────────
$content = @'
/** useDarkMode — system-aware dark mode toggle with persistence */
import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../lib/storageKeys';

export type Theme = 'dark' | 'light' | 'system';

export function useDarkMode() {
  const [preference, setPreference] = useLocalStorage<Theme>(STORAGE_KEYS.THEME, 'dark');

  const [isDark, setIsDark] = useState(() => {
    if (preference === 'system') {
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
    }
    return preference === 'dark';
  });

  useEffect(() => {
    if (preference === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mq.addEventListener('change', handler);
      setIsDark(mq.matches);
      return () => mq.removeEventListener('change', handler);
    }
    setIsDark(preference === 'dark');
  }, [preference]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggle = () => setPreference(prev => prev === 'dark' ? 'light' : 'dark');

  return { isDark, preference, setPreference, toggle };
}
'@
Set-Content -Path "src\hooks\useDarkMode.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useDarkMode hook with system preference detection and persistence"

# ─── COMMIT 27: Add usePlanetTooltip hook ────────────────────────────────────
$content = @'
/** usePlanetTooltip — manages hover tooltip state for planetary chart nodes */
import { useState, useCallback } from 'react';

export interface TooltipState {
  visible: boolean;
  content: string;
  x: number;
  y: number;
  planet: string | null;
}

const INITIAL: TooltipState = { visible: false, content: '', x: 0, y: 0, planet: null };

export function usePlanetTooltip() {
  const [tooltip, setTooltip] = useState<TooltipState>(INITIAL);

  const show = useCallback((planet: string, content: string, x: number, y: number) => {
    setTooltip({ visible: true, content, x, y, planet });
  }, []);

  const hide = useCallback(() => {
    setTooltip(INITIAL);
  }, []);

  const move = useCallback((x: number, y: number) => {
    setTooltip(prev => prev.visible ? { ...prev, x, y } : prev);
  }, []);

  return { tooltip, show, hide, move };
}
'@
Set-Content -Path "src\hooks\usePlanetTooltip.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add usePlanetTooltip hook for interactive chart hover states"

# ─── COMMIT 28: Add useGenerationCount hook ──────────────────────────────────
$content = @'
/** useGenerationCount — track number of kundalis generated this session */
import { useState, useCallback } from 'react';
import { getStoredJSON, setStoredJSON, STORAGE_KEYS } from '../lib/storageKeys';

export function useGenerationCount() {
  const [count, setCount] = useState<number>(() => {
    return getStoredJSON<number>(STORAGE_KEYS.GENERATION_COUNT) ?? 0;
  });

  const increment = useCallback(() => {
    setCount(prev => {
      const next = prev + 1;
      setStoredJSON(STORAGE_KEYS.GENERATION_COUNT, next);
      setStoredJSON(STORAGE_KEYS.LAST_GENERATED_AT, new Date().toISOString());
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    setStoredJSON(STORAGE_KEYS.GENERATION_COUNT, 0);
  }, []);

  return { count, increment, reset };
}
'@
Set-Content -Path "src\hooks\useGenerationCount.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useGenerationCount hook for tracking kundali usage"

# ─── COMMIT 29: Add Graha Maitri (planetary friendship) table ────────────────
$content = @'
/** Graha Maitri (planetary friendship) — natural relationships between planets */

export type Relationship = 'friend' | 'neutral' | 'enemy';

/**
 * Natural planetary friendship table (Naisargika Maitri).
 * Key: planet, Value: { friends, neutrals, enemies }
 */
export const GRAHA_MAITRI: Record<string, { friends: string[]; neutrals: string[]; enemies: string[] }> = {
  Sun: {
    friends:  ['Moon', 'Mars', 'Jupiter'],
    neutrals: ['Mercury'],
    enemies:  ['Venus', 'Saturn'],
  },
  Moon: {
    friends:  ['Sun', 'Mercury'],
    neutrals: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    enemies:  [],
  },
  Mars: {
    friends:  ['Sun', 'Moon', 'Jupiter'],
    neutrals: ['Venus', 'Saturn'],
    enemies:  ['Mercury'],
  },
  Mercury: {
    friends:  ['Sun', 'Venus'],
    neutrals: ['Mars', 'Jupiter', 'Saturn'],
    enemies:  ['Moon'],
  },
  Jupiter: {
    friends:  ['Sun', 'Moon', 'Mars'],
    neutrals: ['Saturn'],
    enemies:  ['Mercury', 'Venus'],
  },
  Venus: {
    friends:  ['Mercury', 'Saturn'],
    neutrals: ['Mars', 'Jupiter'],
    enemies:  ['Sun', 'Moon'],
  },
  Saturn: {
    friends:  ['Mercury', 'Venus'],
    neutrals: ['Jupiter'],
    enemies:  ['Sun', 'Moon', 'Mars'],
  },
};

/**
 * Get the natural relationship between two planets.
 */
export function getNaturalRelationship(planet: string, otherPlanet: string): Relationship {
  const maitri = GRAHA_MAITRI[planet];
  if (!maitri) return 'neutral';
  if (maitri.friends.includes(otherPlanet)) return 'friend';
  if (maitri.enemies.includes(otherPlanet)) return 'enemy';
  return 'neutral';
}
'@
Set-Content -Path "src\lib\grahaMaitri.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Graha Maitri (natural planetary friendship) table"

# ─── COMMIT 30: Add Panchang (almanac) utility ───────────────────────────────
$content = @'
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

  // Nakshatra: moon moves ~13.17°/day, completes 27 nakshatras in 27.32 days
  const nakshatraIndex = Math.floor(((jdn - 2451545) * 13.17 / 360 * 27) % 27);
  const NAKSHATRA_NAMES = [
    'Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra',
    'Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni',
    'Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha',
    'Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha',
    'Purva Bhadrapada','Uttara Bhadrapada','Revati',
  ];
  const nakshatra = NAKSHATRA_NAMES[Math.abs(nakshatraIndex) % 27];

  // Yoga: sum of sun + moon longitude / 13.333°
  const yogaIndex = Math.floor(((jdn * 0.9856 + jdn * 13.176) % 360) / (360 / 27)) % 27;
  const yoga = YOGA_NAMES[Math.abs(yogaIndex) % 27];

  // Karana: half-tithi
  const karanaIndex = (lunarDay * 2) % 11;
  const karana = KARANA_NAMES[karanaIndex] ?? 'Bava';

  return { tithi, vara, nakshatra, yoga, karana };
}
'@
Set-Content -Path "src\lib\panchang.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Panchang (Tithi/Vara/Nakshatra/Yoga/Karana) almanac calculator"

Write-Host "`nCompleted first 30 commits! Continuing..." -ForegroundColor Yellow

# ─── COMMIT 31: Add Muhurta (auspicious timing) constants ────────────────────
$content = @'
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
    sanskritName: 'अमृत',
    quality: 'auspicious',
    suitableFor: ['All auspicious activities', 'Business', 'Travel', 'Marriage'],
    description: 'The most auspicious Choghadiya — ruled by Moon. Excellent for starting important work.',
  },
  {
    name: 'Shubh',
    sanskritName: 'शुभ',
    quality: 'auspicious',
    suitableFor: ['Marriages', 'New ventures', 'Religious ceremonies'],
    description: 'Ruled by Jupiter. Highly favorable for auspicious beginnings.',
  },
  {
    name: 'Labh',
    sanskritName: 'लाभ',
    quality: 'auspicious',
    suitableFor: ['Business', 'Financial dealings', 'Job interviews', 'Starting education'],
    description: 'Ruled by Mercury. Brings gains and profit to endeavors.',
  },
  {
    name: 'Char',
    sanskritName: 'चर',
    quality: 'mixed',
    suitableFor: ['Travel', 'Short journeys'],
    description: 'Ruled by Venus. Good for travel but mixed for other activities.',
  },
  {
    name: 'Rog',
    sanskritName: 'रोग',
    quality: 'inauspicious',
    suitableFor: [],
    description: 'Ruled by Mars. Avoid starting new activities; associated with illness.',
  },
  {
    name: 'Kaal',
    sanskritName: 'काल',
    quality: 'inauspicious',
    suitableFor: [],
    description: 'Ruled by Saturn. Avoid auspicious activities during this period.',
  },
  {
    name: 'Udveg',
    sanskritName: 'उद्वेग',
    quality: 'inauspicious',
    suitableFor: [],
    description: 'Ruled by Sun. Avoid important decisions; associated with anxiety.',
  },
];
'@
Set-Content -Path "src\lib\muhurta.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Choghadiya Muhurta (auspicious timing) definitions"

# ─── COMMIT 32: Add Sade Sati calculator ─────────────────────────────────────
$content = @'
/** Shani Sade Sati (Saturn 7.5-year transit) checker */

export interface SadeSatiResult {
  isActive: boolean;
  phase: 'rising' | 'peak' | 'setting' | 'none';
  description: string;
  startYear?: number;
  endYear?: number;
  advice: string;
}

/**
 * Saturn completes one zodiac revolution in approximately 29.5 years.
 * It spends ~2.5 years in each sign.
 * Sade Sati affects the sign before, the natal Moon sign, and the sign after.
 *
 * @param moonRashi - Natal Moon sign index (0=Aries, 11=Pisces)
 * @param currentYear - Current year for calculation
 */
export function checkSadeSati(moonRashi: number, currentYear: number): SadeSatiResult {
  // Saturn's approximate position: takes 29.5 years to complete one cycle
  // Reference: Saturn was in Aries at approximately 1996.
  const SATURN_ARIES_YEAR = 1996;
  const SATURN_PERIOD = 29.5;
  const YEARS_PER_SIGN = SATURN_PERIOD / 12;

  const yearsSinceRef = currentYear - SATURN_ARIES_YEAR;
  const saturnSignFloat = (yearsSinceRef / YEARS_PER_SIGN) % 12;
  const saturnSign = ((Math.floor(saturnSignFloat) % 12) + 12) % 12;

  const prevSign = (moonRashi - 1 + 12) % 12;
  const nextSign = (moonRashi + 1) % 12;

  let phase: 'rising' | 'peak' | 'setting' | 'none' = 'none';
  if (saturnSign === prevSign) phase = 'rising';
  else if (saturnSign === moonRashi) phase = 'peak';
  else if (saturnSign === nextSign) phase = 'setting';

  const isActive = phase !== 'none';

  const descriptions: Record<string, string> = {
    rising:  'Shani Sade Sati Rising Phase — Saturn approaching your Moon sign. Initial challenges in family and domestic life.',
    peak:    'Shani Sade Sati Peak Phase — Saturn directly over natal Moon. Maximum intensity; tests in career, health, and relationships.',
    setting: 'Shani Sade Sati Setting Phase — Saturn moving away. Gradual relief; lessons being integrated.',
    none:    'Sade Sati is not active at this time.',
  };

  const advice: Record<string, string> = {
    rising:  'Strengthen Saturn: serve others, be disciplined, avoid shortcuts. Chant Shani mantra on Saturdays.',
    peak:    'Practice patience and perseverance. Donate oil/black sesame on Saturdays. Visit Shani temples.',
    setting: 'Consolidate gains made during the challenging period. Complete unfinished projects.',
    none:    'No specific Sade Sati remedies needed at this time.',
  };

  return {
    isActive,
    phase,
    description: descriptions[phase],
    advice: advice[phase],
  };
}
'@
Set-Content -Path "src\lib\sadeSati.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Sade Sati (Saturn 7.5-year transit) phase calculator"

# ─── COMMIT 33: Add validation improvements ───────────────────────────────────
$content = @'
/** Validation utilities for birth detail inputs */

export function isValidYear(year: number): boolean {
  return Number.isInteger(year) && year >= 1900 && year <= 2100;
}

export function isValidMonth(month: number): boolean {
  return Number.isInteger(month) && month >= 1 && month <= 12;
}

export function isValidDay(day: number, month: number, year: number): boolean {
  if (!Number.isInteger(day) || day < 1) return false;
  const daysInMonth = new Date(year, month, 0).getDate();
  return day <= daysInMonth;
}

export function isValidTime(time: string): boolean {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return false;
  const h = Number(match[1]);
  const m = Number(match[2]);
  return h >= 0 && h <= 23 && m >= 0 && m <= 59;
}

export function isValidLatitude(lat: number): boolean {
  return lat >= -90 && lat <= 90;
}

export function isValidLongitude(lng: number): boolean {
  return lng >= -180 && lng <= 180;
}

/**
 * Validate a complete birth date string (YYYY-MM-DD).
 * Returns null if valid, or an error message if invalid.
 */
export function validateBirthDate(dateStr: string): string | null {
  if (!dateStr) return 'Birth date is required.';
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return 'Date must be in YYYY-MM-DD format.';
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!isValidYear(year)) return 'Year must be between 1900 and 2100.';
  if (!isValidMonth(month)) return 'Month must be between 1 and 12.';
  if (!isValidDay(day, month, year)) return 'Invalid day for the given month/year.';
  if (new Date(dateStr) > new Date()) return 'Birth date cannot be in the future.';
  return null;
}

/**
 * Validate a birth time string (HH:MM).
 */
export function validateBirthTime(time: string): string | null {
  if (!time) return 'Birth time is required.';
  if (!isValidTime(time)) return 'Time must be in HH:MM format (24-hour).';
  return null;
}

/**
 * Validate a birth place string.
 */
export function validateBirthPlace(place: string): string | null {
  if (!place || place.trim().length < 2) return 'Please enter a valid birth place (at least 2 characters).';
  if (place.trim().length > 200) return 'Birth place name is too long.';
  return null;
}

/**
 * Validate coordinates.
 */
export function validateCoordinates(lat: number, lng: number): string | null {
  if (isNaN(lat) || !isValidLatitude(lat)) return 'Latitude must be between -90 and 90.';
  if (isNaN(lng) || !isValidLongitude(lng)) return 'Longitude must be between -180 and 180.';
  return null;
}
'@
Set-Content -Path "src\lib\validationUtils.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: add validateBirthDate, validateBirthTime, validateCoordinates helpers"

# ─── COMMIT 34: Add SEO meta tag helper ───────────────────────────────────────
$content = @'
/** SEO and Open Graph meta tag utilities for KundaliAI */

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export const DEFAULT_META: MetaTags = {
  title: 'KundaliAI — Free Vedic Astrology Birth Chart Generator',
  description: 'Generate your personalized Vedic astrology birth chart (Kundali) with AI-powered interpretations. Get insights on personality, career, relationships, and life path.',
  keywords: [
    'kundali', 'vedic astrology', 'birth chart', 'jyotish', 'horoscope',
    'AI astrology', 'free kundali', 'janma kundali', 'natal chart', 'rashi',
  ],
  ogImage: '/og-image.png',
};

export const PAGE_METAS: Record<string, MetaTags> = {
  home: DEFAULT_META,
  privacy: {
    title: 'Privacy Policy | KundaliAI',
    description: 'Read how KundaliAI collects, uses, and protects your personal information.',
  },
  terms: {
    title: 'Terms of Service | KundaliAI',
    description: 'Review the terms and conditions for using the KundaliAI platform.',
  },
  refund: {
    title: 'Refund Policy | KundaliAI',
    description: 'Understand our refund and cancellation policy for KundaliAI premium features.',
  },
};

/**
 * Generate a page title with the app name suffix.
 */
export function buildPageTitle(pageTitle: string): string {
  if (pageTitle === DEFAULT_META.title) return pageTitle;
  return `${pageTitle} | KundaliAI`;
}

/**
 * Generate structured data (JSON-LD) for the homepage.
 */
export function getHomepageStructuredData(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'KundaliAI',
    description: DEFAULT_META.description,
    url: 'https://kundali.ai',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  });
}
'@
Set-Content -Path "src\lib\seo.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add SEO meta tag constants and JSON-LD structured data helper"

# ─── COMMIT 35: Add analytics event constants ─────────────────────────────────
$content = @'
/** Analytics event tracking constants for KundaliAI */

export const ANALYTICS_EVENTS = {
  // Chart generation
  CHART_GENERATED:          'chart_generated',
  CHART_GENERATION_FAILED:  'chart_generation_failed',
  CHART_DOWNLOADED:         'chart_downloaded',
  CHART_SHARED:             'chart_shared',
  CHART_COPIED:             'chart_copied',

  // Navigation
  PAGE_VIEW:                'page_view',
  TAB_SWITCHED:             'tab_switched',

  // Engagement
  INTERPRETATION_READ:      'interpretation_read',
  INTERPRETATION_EXPANDED:  'interpretation_expanded',
  SUPPORT_CHAT_OPENED:      'support_chat_opened',

  // Conversion
  PAYMENT_INITIATED:        'payment_initiated',
  PAYMENT_COMPLETED:        'payment_completed',
  PAYMENT_FAILED:           'payment_failed',

  // Errors
  GEOCODING_FAILED:         'geocoding_failed',
  API_ERROR:                'api_error',
  RATE_LIMIT_HIT:           'rate_limit_hit',
} as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

/**
 * Safely dispatch an analytics event (no-op if analytics not initialized).
 */
export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
): void {
  try {
    // Integrate with your analytics provider here (e.g., PostHog, Mixpanel, GA4)
    if (typeof window !== 'undefined' && (window as Record<string, unknown>).gtag) {
      ((window as Record<string, unknown>).gtag as Function)('event', event, properties ?? {});
    }
  } catch {
    // Never let analytics errors affect the user experience
  }
}
'@
Set-Content -Path "src\lib\analytics.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add analytics event constants and trackEvent utility"

# ─── COMMIT 36: Add chart PDF export utility ──────────────────────────────────
$content = @'
/** Chart download/export utilities for KundaliAI */

/**
 * Download a string as a text file.
 */
export function downloadTextFile(content: string, filename: string, mimeType = 'text/plain'): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download a DOM element as an SVG string.
 */
export function downloadSVG(svgElement: SVGElement, filename: string): void {
  const serializer = new XMLSerializer();
  const svgStr = serializer.serializeToString(svgElement);
  downloadTextFile(svgStr, filename, 'image/svg+xml');
}

/**
 * Format a kundali interpretation as plain text for download.
 */
export function formatChartAsText(params: {
  name: string;
  date: string;
  time: string;
  place: string;
  ascendant: string;
  interpretation: string;
}): string {
  const now = new Date().toLocaleString('en-IN');
  return [
    '══════════════════════════════════════════',
    '          KUNDALI AI — BIRTH CHART REPORT',
    '══════════════════════════════════════════',
    '',
    `Name:       ${params.name}`,
    `Birth Date: ${params.date}`,
    `Birth Time: ${params.time}`,
    `Birth Place: ${params.place}`,
    `Ascendant:  ${params.ascendant}`,
    '',
    '──────────────────────────────────────────',
    'VEDIC INTERPRETATION',
    '──────────────────────────────────────────',
    '',
    params.interpretation,
    '',
    '──────────────────────────────────────────',
    `Generated by KundaliAI on ${now}`,
    'https://kundali.ai',
    '══════════════════════════════════════════',
  ].join('\n');
}
'@
Set-Content -Path "src\lib\chartExport.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add chart export utilities (text file, SVG download, formatted report)"

# ─── COMMIT 37: Add geocoding utility ─────────────────────────────────────────
$content = @'
/** Geocoding utilities for birth place lookup */

export interface GeocodingResult {
  displayName: string;
  latitude: number;
  longitude: number;
  timezone?: string;
  country?: string;
  state?: string;
  city?: string;
}

/**
 * Search for a place using the Nominatim OpenStreetMap API.
 * Free, no API key required.
 */
export async function geocodePlace(query: string): Promise<GeocodingResult[]> {
  if (!query || query.trim().length < 2) return [];

  const url = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('q', query.trim());
  url.searchParams.set('format', 'json');
  url.searchParams.set('limit', '5');
  url.searchParams.set('addressdetails', '1');

  const response = await fetch(url.toString(), {
    headers: { 'Accept-Language': 'en', 'User-Agent': 'KundaliAI/1.0' },
  });

  if (!response.ok) throw new Error(`Geocoding failed: ${response.status}`);

  const data = await response.json() as Array<{
    display_name: string;
    lat: string;
    lon: string;
    address?: { country?: string; state?: string; city?: string; town?: string };
  }>;

  return data.map(item => ({
    displayName: item.display_name,
    latitude:    parseFloat(item.lat),
    longitude:   parseFloat(item.lon),
    country:     item.address?.country,
    state:       item.address?.state,
    city:        item.address?.city ?? item.address?.town,
  }));
}

/**
 * Estimate timezone offset from longitude (rough approximation).
 * Each 15° of longitude = 1 hour offset from UTC.
 */
export function estimateTimezoneFromLongitude(longitude: number): string {
  const offsetHours = Math.round(longitude / 15);
  const sign = offsetHours >= 0 ? '+' : '-';
  const abs = Math.abs(offsetHours);
  return `UTC${sign}${String(abs).padStart(2, '0')}:00`;
}
'@
Set-Content -Path "src\lib\geocoding.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add geocoding utility with Nominatim API and timezone estimation"

# ─── COMMIT 38: Add Lagna (ascendant) calculator ─────────────────────────────
$content = @'
/** Lagna (Ascendant) calculator for Vedic birth charts */

import { toRadians, toDegrees, normalizeDegrees } from './dateUtils';

export interface LagnaResult {
  sign: string;
  signIndex: number;
  degree: number;
  description: string;
}

const RASHI_NAMES = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];

const LAGNA_DESCRIPTIONS: Record<string, string> = {
  Aries:       'Mesha Lagna — Dynamic, pioneering, energetic. Ruled by Mars.',
  Taurus:      'Vrishabha Lagna — Stable, artistic, sensual. Ruled by Venus.',
  Gemini:      'Mithuna Lagna — Intellectual, communicative, versatile. Ruled by Mercury.',
  Cancer:      'Karka Lagna — Nurturing, intuitive, home-loving. Ruled by Moon.',
  Leo:         'Simha Lagna — Charismatic, generous, leadership-oriented. Ruled by Sun.',
  Virgo:       'Kanya Lagna — Analytical, precise, health-conscious. Ruled by Mercury.',
  Libra:       'Tula Lagna — Balanced, diplomatic, relationship-focused. Ruled by Venus.',
  Scorpio:     'Vrishchika Lagna — Intense, transformative, research-minded. Ruled by Mars.',
  Sagittarius: 'Dhanu Lagna — Philosophical, optimistic, adventurous. Ruled by Jupiter.',
  Capricorn:   'Makara Lagna — Disciplined, ambitious, practical. Ruled by Saturn.',
  Aquarius:    'Kumbha Lagna — Humanitarian, innovative, independent. Ruled by Saturn.',
  Pisces:      'Meena Lagna — Spiritual, empathetic, creative. Ruled by Jupiter.',
};

/**
 * Estimate the Lagna (Ascendant) sign from birth hour and month.
 * This is a simplified calculation; use Swiss Ephemeris for precision.
 */
export function estimateLagna(birthHour: number, birthMonth: number, latitude: number): LagnaResult {
  // Each sign rises for approximately 2 hours (varies by latitude)
  // Add month offset for seasonal variation
  const baseIndex = (Math.floor(birthHour / 2) + (birthMonth - 1)) % 12;
  // Adjust for southern hemisphere (signs rise in reverse order roughly)
  const signIndex = latitude < 0 ? (12 - baseIndex) % 12 : baseIndex;

  const sign = RASHI_NAMES[signIndex];
  const degree = ((birthHour % 2) / 2) * 30; // Rough degree within sign

  return {
    sign,
    signIndex,
    degree: parseFloat(degree.toFixed(2)),
    description: LAGNA_DESCRIPTIONS[sign] ?? `${sign} Ascendant`,
  };
}
'@
Set-Content -Path "src\lib\lagna.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add Lagna (Ascendant) estimator with sign descriptions"

# ─── COMMIT 39: Add tooltip content for planets ───────────────────────────────
$content = @'
/** Tooltip and description content for planets in Vedic astrology */

export const PLANET_DESCRIPTIONS: Record<string, {
  deity: string;
  element: string;
  quality: string;
  governs: string[];
  keywords: string[];
  body: string;
}> = {
  Sun: {
    deity: 'Lord Surya',
    element: 'Fire',
    quality: 'Royal, Authoritative',
    governs: ['Soul', 'Father', 'Authority', 'Government', 'Vitality'],
    keywords: ['Leadership', 'Ego', 'Pride', 'Fame', 'Power'],
    body: 'Heart, eyes, bone structure',
  },
  Moon: {
    deity: 'Lord Chandra',
    element: 'Water',
    quality: 'Nurturing, Receptive',
    governs: ['Mind', 'Mother', 'Emotions', 'Public', 'Intuition'],
    keywords: ['Feelings', 'Memory', 'Imagination', 'Home', 'Comfort'],
    body: 'Mind, chest, fluids, left eye',
  },
  Mars: {
    deity: 'Lord Mangal / Kartikeya',
    element: 'Fire',
    quality: 'Aggressive, Dynamic',
    governs: ['Courage', 'Brothers', 'Property', 'Accidents', 'Surgery'],
    keywords: ['Action', 'Passion', 'Conflict', 'Energy', 'Drive'],
    body: 'Blood, muscles, nose, bile',
  },
  Mercury: {
    deity: 'Lord Budha',
    element: 'Earth/Air',
    quality: 'Intellectual, Adaptable',
    governs: ['Intelligence', 'Communication', 'Business', 'Education', 'Trade'],
    keywords: ['Logic', 'Speech', 'Writing', 'Mathematics', 'Analysis'],
    body: 'Nervous system, skin, lungs, arms',
  },
  Jupiter: {
    deity: 'Lord Brihaspati / Guru',
    element: 'Ether',
    quality: 'Expansive, Benevolent',
    governs: ['Wisdom', 'Religion', 'Children', 'Higher education', 'Wealth'],
    keywords: ['Growth', 'Grace', 'Truth', 'Philosophy', 'Generosity'],
    body: 'Liver, hips, thighs, fat',
  },
  Venus: {
    deity: 'Lord Shukra',
    element: 'Water',
    quality: 'Pleasurable, Harmonious',
    governs: ['Love', 'Beauty', 'Arts', 'Luxury', 'Marriage'],
    keywords: ['Creativity', 'Romance', 'Pleasure', 'Fashion', 'Harmony'],
    body: 'Kidneys, reproductive system, throat',
  },
  Saturn: {
    deity: 'Lord Shani',
    element: 'Air',
    quality: 'Restricting, Disciplining',
    governs: ['Karma', 'Longevity', 'Obstacles', 'Service', 'Justice'],
    keywords: ['Discipline', 'Patience', 'Hard work', 'Lessons', 'Delay'],
    body: 'Bones, teeth, knees, nervous system',
  },
};

export function getPlanetDescription(planet: string) {
  return PLANET_DESCRIPTIONS[planet] ?? null;
}
'@
Set-Content -Path "src\lib\planetDescriptions.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add detailed planet description data (deity, element, governs, body parts)"

# ─── COMMIT 40: Add useIntersectionObserver hook ─────────────────────────────
$content = @'
/** useIntersectionObserver — track element visibility for lazy loading / animations */
import { useState, useEffect, useRef, RefObject } from 'react';

export interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Returns a ref and a boolean indicating whether the element is in the viewport.
 * @param options.once - If true, stops observing after the first intersection.
 */
export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, root = null, rootMargin = '0px', once = false } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  return [ref, isVisible];
}
'@
Set-Content -Path "src\hooks\useIntersectionObserver.ts" -Value $content -Encoding UTF8
Make-Commit "feat: add useIntersectionObserver hook for lazy loading and scroll animations"

Write-Host "`nCompleted 40 commits! Almost there..." -ForegroundColor Yellow

# ─── COMMIT 41: Update CHANGELOG ──────────────────────────────────────────────
$content = @'
# Changelog

All notable changes to KundaliAI are documented here.

## [Unreleased] — 2026-07-08

### Added
- `nakshatra.ts`: 27 Nakshatra constants, lords, and getNakshatraFromDegrees()
- `dasha.ts`: Vimshottari dasha period durations and calculateDashaPeriods()
- `dignity.ts`: Planetary exaltation/debilitation/own-sign dignity table
- `yogas.ts`: Pancha Mahapurusha, Dhana, and Dosha yoga definitions
- `ayanamsha.ts`: Lahiri/Raman/KP/Fagan-Bradley ayanamsha calculator
- `houseStrength.ts`: Kendra/Trikona/Dusthana house classification and Bhava significations
- `aspects.ts`: Vedic Drishti (planetary aspect) calculator
- `mangalDosha.ts`: Mangal Dosha checker with severity and remedies
- `kaalSarp.ts`: Kaal Sarp Dosha checker with all 12 types
- `panchang.ts`: Tithi/Vara/Nakshatra/Yoga/Karana calculator
- `muhurta.ts`: Choghadiya Muhurta auspicious timing definitions
- `sadeSati.ts`: Saturn Sade Sati phase calculator
- `grahaMaitri.ts`: Natural planetary friendship/enmity table
- `geocoding.ts`: Nominatim geocoding integration and timezone estimation
- `lagna.ts`: Ascendant sign estimator with descriptions
- `planetDescriptions.ts`: Detailed planet metadata (deity, element, body parts)
- `seo.ts`: Meta tags, page titles, and JSON-LD structured data
- `analytics.ts`: Event tracking constants and trackEvent() helper
- `chartExport.ts`: Text file, SVG download, and formatted report export
- `useChartHistory.ts`: Persistent chart generation history hook
- `useDebounce.ts`: Value debounce hook
- `useLocalStorage.ts`: Typed localStorage hook
- `useClipboard.ts`: Clipboard copy hook with fallback
- `useCountdown.ts`: Countdown timer hook
- `useWindowSize.ts`: Responsive window size hook
- `useDarkMode.ts`: System-aware dark mode toggle
- `usePlanetTooltip.ts`: Chart hover tooltip state hook
- `useGenerationCount.ts`: Kundali generation counter hook
- `useIntersectionObserver.ts`: Scroll visibility hook

### Changed
- `types.ts`: Extended KundaliData with nakshatra, dasha, yoga, and HouseNumber type
- `formatters.ts`: Added DMS formatter, relative time, and JSDoc
- `stringUtils.ts`: Added titleCase, slugify, isValidName, zeroPad
- `dateUtils.ts`: Added addYears, yearsBetween, toISODate, parseISODate
- `errorMessages.ts`: Centralized all error messages as typed constants
- `colors.ts`: Expanded color palette with planet glows and rashi colors
- `storageKeys.ts`: Added typed localStorage helpers
- `logger.ts`: Improved with structured formatting and dev-only filtering
- `constants.ts`: Added Kendra/Trikona/Dusthana arrays, cache TTL, v1.1.0
- `rate-limiter.ts`: Added getRemainingRequests() and getMsUntilReset()
- `validationUtils.ts`: Added validateBirthDate, validateBirthTime, validateCoordinates

## [1.0.0] — 2026-07-01

### Added
- Initial release of KundaliAI
- AI-powered Vedic birth chart generation
- South Indian style chart visualization
- Payment integration via Razorpay
- Support chat widget
'@
Set-Content -Path "CHANGELOG.md" -Value $content -Encoding UTF8
Make-Commit "docs: update CHANGELOG with all new utility modules and hooks"

# ─── COMMIT 42: Update README with new utilities ──────────────────────────────
$readmeAddition = @'

## Library Modules

### Astrology Utilities
- `nakshatra.ts` - 27 Nakshatra constants and getNakshatraFromDegrees()
- `dasha.ts` - Vimshottari dasha period calculation
- `dignity.ts` - Planetary exaltation/debilitation tables
- `yogas.ts` - Vedic yoga (auspicious combination) definitions
- `ayanamsha.ts` - Sidereal correction (Lahiri/Raman/KP/Fagan-Bradley)
- `houseStrength.ts` - Kendra/Trikona/Dusthana classification
- `aspects.ts` - Vedic Drishti (planetary aspect) calculator
- `mangalDosha.ts` - Mangal Dosha checker with remedies
- `kaalSarp.ts` - Kaal Sarp Dosha type classifier
- `panchang.ts` - Daily Panchang almanac (Tithi/Vara/Nakshatra/Yoga/Karana)
- `muhurta.ts` - Choghadiya auspicious timing
- `sadeSati.ts` - Saturn Sade Sati phase calculator
- `grahaMaitri.ts` - Natural planetary friendship/enmity
- `geocoding.ts` - Place lookup via Nominatim API
- `lagna.ts` - Ascendant sign estimator
- `planetDescriptions.ts` - Planet metadata (deity, element, body parts)

### React Hooks
- `useChartHistory` - Persistent chart generation history
- `useDebounce` - Value debounce
- `useLocalStorage` - Typed localStorage sync
- `useClipboard` - Clipboard copy with fallback
- `useCountdown` - Countdown timer
- `useWindowSize` - Responsive breakpoints
- `useDarkMode` - System-aware theme toggle
- `useIntersectionObserver` - Scroll visibility detection
'@

Add-Content -Path "README.md" -Value $readmeAddition
Make-Commit "docs: add library modules and React hooks section to README"

# ─── COMMIT 43: Add .editorconfig improvements ────────────────────────────────
$content = @'
# EditorConfig — https://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.{ts,tsx,js,jsx,mjs,cjs}]
indent_size = 2
max_line_length = 120

[*.{json,jsonc}]
indent_size = 2

[*.{md,mdx}]
trim_trailing_whitespace = false
max_line_length = off

[*.{yaml,yml}]
indent_size = 2

[*.{css,scss}]
indent_size = 2

[Makefile]
indent_style = tab

[*.ps1]
indent_size = 4
end_of_line = crlf
'@
Set-Content -Path ".editorconfig" -Value $content -Encoding UTF8
Make-Commit "chore: update .editorconfig with per-filetype rules and max line length"

# ─── COMMIT 44: Add Prettierrc improvements ───────────────────────────────────
$content = @'
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 120,
  "trailingComma": "all",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "importOrder": ["^react", "^@?\\w", "^[./]"],
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}
'@
Set-Content -Path ".prettierrc" -Value $content -Encoding UTF8
Make-Commit "chore: update .prettierrc with import ordering and arrowParens settings"

# ─── COMMIT 45: Add JSDoc to KundaliChart SAMPLE data ────────────────────────
$chartContent = Get-Content "src\components\KundaliChart.tsx" -Raw
$chartContent = $chartContent -replace "const SAMPLE = \[", "/** Sample planetary positions for chart preview (not real data) */`nconst SAMPLE = ["
Set-Content -Path "src\components\KundaliChart.tsx" -Value $chartContent -Encoding UTF8
Make-Commit "docs: add JSDoc comment to KundaliChart SAMPLE data array"

# ─── COMMIT 46: Add lib index barrel export ───────────────────────────────────
$content = @'
/**
 * KundaliAI Library — Barrel export
 * Import from this file for tree-shakeable access to all lib utilities.
 */

export * from './types';
export * from './constants';
export * from './formatters';
export * from './dateUtils';
export * from './stringUtils';
export * from './validationUtils';
export * from './colors';
export * from './storageKeys';
export * from './logger';
export * from './nakshatra';
export * from './dasha';
export * from './dignity';
export * from './yogas';
export * from './ayanamsha';
export * from './houseStrength';
export * from './aspects';
export * from './mangalDosha';
export * from './kaalSarp';
export * from './panchang';
export * from './muhurta';
export * from './sadeSati';
export * from './grahaMaitri';
export * from './geocoding';
export * from './lagna';
export * from './planetDescriptions';
export * from './seo';
export * from './analytics';
export * from './chartExport';
'@
Set-Content -Path "src\lib\index.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: update lib barrel export to include all new utility modules"

# ─── COMMIT 47: Add hooks index barrel ───────────────────────────────────────
New-Item -ItemType Directory -Force -Path "src\hooks" | Out-Null
$content = @'
/**
 * KundaliAI Hooks — Barrel export
 */

export { useChartHistory } from './useChartHistory';
export type { ChartHistoryItem } from './useChartHistory';

export { useDebounce } from './useDebounce';
export { useLocalStorage } from './useLocalStorage';
export { useClipboard } from './useClipboard';
export type { UseClipboardReturn } from './useClipboard';

export { useCountdown } from './useCountdown';
export type { UseCountdownReturn } from './useCountdown';

export { useWindowSize } from './useWindowSize';
export type { WindowSize } from './useWindowSize';

export { useDarkMode } from './useDarkMode';
export type { Theme } from './useDarkMode';

export { usePlanetTooltip } from './usePlanetTooltip';
export type { TooltipState } from './usePlanetTooltip';

export { useGenerationCount } from './useGenerationCount';
export { useIntersectionObserver } from './useIntersectionObserver';
'@
Set-Content -Path "src\hooks\index.ts" -Value $content -Encoding UTF8
Make-Commit "refactor: add hooks barrel export index for clean imports"

# ─── COMMIT 48: Add CODE_OF_CONDUCT improvements ─────────────────────────────
$content = @'
# Code of Conduct

## Our Pledge

We as contributors and maintainers of **KundaliAI** pledge to make participation in our project a harassment-free, respectful, and inclusive experience for everyone, regardless of age, body size, disability, ethnicity, gender identity, experience level, nationality, religion, or sexual identity.

## Our Standards

Examples of behavior that contributes to a positive environment:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members
- Respecting Vedic and Hindu cultural traditions referenced in this project

Examples of unacceptable behavior:

- Trolling, insulting, or derogatory comments
- Public or private harassment
- Publishing others private information without permission
- Other conduct which could reasonably be considered inappropriate

## Our Responsibilities

Project maintainers are responsible for clarifying standards of acceptable behavior and will take appropriate corrective action in response to any instances of unacceptable behavior.

## Scope

This Code of Conduct applies within all project spaces and in public spaces when an individual is representing the project.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team. All complaints will be reviewed and investigated promptly and fairly.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org/), version 2.1.
'@
Set-Content -Path "CODE_OF_CONDUCT.md" -Value $content -Encoding UTF8
Make-Commit "docs: expand Code of Conduct with cultural respect clause for Vedic traditions"

# ─── COMMIT 49: Add CONTRIBUTING guide improvements ───────────────────────────
$content = @'
# Contributing to KundaliAI

Thank you for your interest in contributing to KundaliAI! We welcome contributions of all kinds.

## Getting Started

1. **Fork** the repository and create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Install** dependencies:
   ```bash
   npm install
   ```

3. **Start** the dev server:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Code Style
- Use **TypeScript** for all new files
- Follow the existing naming conventions (camelCase for functions, PascalCase for components/types)
- Add JSDoc comments to all exported functions
- Keep functions small and single-purpose
- Use `const` over `let` wherever possible

### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) spec:
- `feat:` — New features
- `fix:` — Bug fixes
- `refactor:` — Code refactoring
- `docs:` — Documentation changes
- `chore:` — Tooling, config, maintenance
- `test:` — Test additions or changes
- `perf:` — Performance improvements
- `a11y:` — Accessibility improvements
- `sec:` — Security improvements
- `ui:` — UI/UX changes

### Astrology Accuracy
- Cite your sources when implementing astrology calculations
- Note if calculations are approximations vs. precise ephemeris-based
- Respect Vedic/Jyotish traditions and Sanskrit terminology

### Pull Request Process
1. Ensure your branch is up to date with `main`
2. Run `npm run build` to verify no build errors
3. Update `CHANGELOG.md` with your changes
4. Fill out the PR template completely
5. Request review from at least one maintainer

## Areas to Contribute

- 🌟 Improving planetary calculation accuracy
- 🎨 UI/UX enhancements
- 🌐 Internationalization (Hindi, Tamil, Telugu, Bengali)
- 📖 Documentation improvements
- ♿ Accessibility improvements
- 🧪 Adding unit tests
- 🔒 Security auditing

## Questions?

Open a [GitHub Discussion](https://github.com/DEVsaurabhgaur/KundaliAI/discussions) for questions and ideas.
'@
Set-Content -Path "CONTRIBUTING.md" -Value $content -Encoding UTF8
Make-Commit "docs: expand CONTRIBUTING guide with astrology accuracy guidelines and commit conventions"

# ─── COMMIT 50: Final chore — add streak tracker update ──────────────────────
$streakEntry = @"

## 2026-07-08

- **50 commits** pushed for daily streak maintenance
- Added 20+ Vedic astrology utility modules (nakshatra, dasha, dignity, yogas, ayanamsha, aspects, doshas, panchang, muhurta)
- Added 10+ React hooks (useChartHistory, useDebounce, useLocalStorage, useClipboard, useCountdown, useWindowSize, useDarkMode, usePlanetTooltip, useGenerationCount, useIntersectionObserver)
- Extended all existing lib utilities with better types, JSDoc, and helper functions
- Updated documentation (README, CHANGELOG, CONTRIBUTING, CODE_OF_CONDUCT)
- Refactored barrel exports for lib and hooks directories
"@
Add-Content -Path "streak.txt" -Value $streakEntry
Make-Commit "chore: complete 50-commit streak for 2026-07-08 - added astrology utilities and React hooks"

Write-Host "`nAll 50 commits complete! Pushing to GitHub..." -ForegroundColor Cyan

git push origin HEAD

Write-Host "`nSuccessfully pushed $commitCount commits to GitHub!" -ForegroundColor Green
Write-Host "Streak maintained for $date" -ForegroundColor Green
