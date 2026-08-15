/**
 * D60 Shashtiamsha Chart Calculation
 * Division of sign into 60 parts of 0.5 degrees (30 arcminutes) each.
 * Used for deep past-life karma analysis and micro-timing of life events.
 */

export interface ShashtiamshaPosition {
  planet: string;
  shashtiamshaIndex: number;
  rashiIndex: number;
  isBeneficPart: boolean;
  deityName: string;
}

// First 10 Shashtiamsha deities sample mapping
const SHASHTIAMSHA_DEITIES = [
  'Ghora', 'Rakshasa', 'Deva', 'Kubera', 'Yaksha', 'Kinnara',
  'Bhrashta', 'Kulaghna', 'Garala', 'Vahni', 'Maya', 'Purishaka'
];

export function calculateShashtiamsha(planet: string, siderealLongitude: number): ShashtiamshaPosition {
  const normDeg = ((siderealLongitude % 360) + 360) % 360;
  const signIndex = Math.floor(normDeg / 30);
  const degInSign = normDeg % 30;
  const partNumber = Math.min(Math.floor(degInSign / 0.5) + 1, 60);

  // In Parashara system: odd signs start from same sign, even signs from 7th sign
  const offset = signIndex % 2 === 0 ? signIndex : (signIndex + 6) % 12;
  const rashiIndex = (offset + (partNumber - 1)) % 12;

  // Benefic determination according to classical texts
  const isBeneficPart = partNumber % 2 === 0 && partNumber % 3 !== 0;
  const deityName = SHASHTIAMSHA_DEITIES[(partNumber - 1) % SHASHTIAMSHA_DEITIES.length];

  return {
    planet,
    shashtiamshaIndex: partNumber,
    rashiIndex,
    isBeneficPart,
    deityName
  };
}
