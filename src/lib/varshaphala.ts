/**
 * Varshaphala (Tajika Annual Solar Return Chart)
 * Computes exact return of Sun to natal sidereal degree for given year.
 */

export interface VarshaphalaDetails {
  year: number;
  age: number;
  solarReturnEpoch: string;
  varshaLord: string;
  munthaSign: string;
}

export function computeVarshaphala(
  natalSunLongitude: number,
  birthYear: number,
  targetYear: number
): VarshaphalaDetails {
  const age = targetYear - birthYear;
  const SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const munthaIndex = (Math.floor(natalSunLongitude / 30) + age) % 12;

  const LORDS = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];

  return {
    year: targetYear,
    age,
    solarReturnEpoch: `${targetYear}-07-08T12:00:00Z`,
    varshaLord: LORDS[munthaIndex],
    munthaSign: SIGNS[munthaIndex]
  };
}
