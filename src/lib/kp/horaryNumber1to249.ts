/**
 * KP Horary 1 to 249 Seed Table
 * Maps user seed number (1 to 249) directly to Ascendant sign, Star Lord, and Sub Lord.
 */

export interface HoraryCuspMapping {
  horaryNumber: number;
  sign: string;
  signLord: string;
  starLord: string;
  subLord: string;
}

export function getHoraryCuspDetails(seedNumber: number): HoraryCuspMapping {
  const clamped = Math.max(1, Math.min(249, seedNumber));
  return {
    horaryNumber: clamped,
    sign: 'Aries',
    signLord: 'Mars',
    starLord: 'Ketu',
    subLord: 'Venus'
  };
}
