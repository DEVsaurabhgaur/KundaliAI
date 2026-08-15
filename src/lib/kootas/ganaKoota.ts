/**
 * Gana Koota (6 Points Max)
 * Temperamental temperament: Deva (Divine), Manushya (Human), Rakshasa (Fiery/Fierce)
 */

const NAKSHATRA_GANA = [
  'Deva', 'Manushya', 'Rakshasa', 'Manushya', 'Deva', 'Manushya',
  'Deva', 'Deva', 'Rakshasa', 'Rakshasa', 'Manushya', 'Manushya',
  'Deva', 'Rakshasa', 'Deva', 'Rakshasa', 'Deva', 'Rakshasa',
  'Rakshasa', 'Manushya', 'Manushya', 'Deva', 'Rakshasa', 'Rakshasa',
  'Manushya', 'Manushya', 'Deva'
];

export function calculateGanaKoota(boyNak: number, girlNak: number) {
  const ganaBoy = NAKSHATRA_GANA[boyNak % 27];
  const ganaGirl = NAKSHATRA_GANA[girlNak % 27];

  let points = 0;
  if (ganaBoy === ganaGirl) points = 6;
  else if (ganaBoy === 'Deva' && ganaGirl === 'Manushya') points = 5;
  else if (ganaBoy === 'Manushya' && ganaGirl === 'Deva') points = 5;
  else if (ganaBoy === 'Rakshasa' && ganaGirl === 'Deva') points = 1;
  else if (ganaBoy === 'Deva' && ganaGirl === 'Rakshasa') points = 0;

  return {
    koota: 'Gana',
    maxPoints: 6,
    obtainedPoints: points,
    ganaBoy,
    ganaGirl
  };
}
