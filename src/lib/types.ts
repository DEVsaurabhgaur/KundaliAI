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
