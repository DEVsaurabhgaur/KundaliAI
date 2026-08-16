/**
 * Ashta Dikpalas (8 Guardians of Cardinal Directions)
 */

export interface DirectionGuardian {
  direction: string;
  guardian: string;
  rulingPlanet: string;
  idealRoom: string;
}

export const ASHTA_DIKPALAS: DirectionGuardian[] = [
  { direction: 'East', guardian: 'Indra', rulingPlanet: 'Sun', idealRoom: 'Main entrance, study room, meditation' },
  { direction: 'South-East', guardian: 'Agni', rulingPlanet: 'Venus', idealRoom: 'Kitchen, electrical equipment' },
  { direction: 'South', guardian: 'Yama', rulingPlanet: 'Mars', idealRoom: 'Master bedroom, heavy storage' },
  { direction: 'South-West', guardian: 'Nirriti', rulingPlanet: 'Rahu', idealRoom: 'Head of household suite, wardrobe' },
  { direction: 'West', guardian: 'Varuna', rulingPlanet: 'Saturn', idealRoom: 'Dining room, overhead water tanks' },
  { direction: 'North-West', guardian: 'Vayu', rulingPlanet: 'Moon', idealRoom: 'Guest room, garage, finished stock' },
  { direction: 'North', guardian: 'Kubera', rulingPlanet: 'Mercury', idealRoom: 'Treasury, cash locker, living room' },
  { direction: 'North-East', guardian: 'Ishanya (Shiva)', rulingPlanet: 'Jupiter', idealRoom: 'Puja altar, meditation sanctuary' }
];
