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
}

export interface KundaliData {
  birthDetails: BirthDetails;
  ascendant: string;
  planets: PlanetaryPosition[];
  generatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

export type PlanetName = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn' | 'Rahu (North Node)' | 'Ketu (South Node)';
export type RashiName = 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';

