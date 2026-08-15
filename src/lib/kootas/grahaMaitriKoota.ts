/**
 * Graha Maitri Koota (5 Points Max)
 * Intellectual and psychological friendship between Moon sign lord rulers.
 */

const SIGN_LORDS = [
  'Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury',
  'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'
];

export function calculateGrahaMaitriKoota(boySignIndex: number, girlSignIndex: number) {
  const lordBoy = SIGN_LORDS[boySignIndex];
  const lordGirl = SIGN_LORDS[girlSignIndex];

  if (lordBoy === lordGirl) {
    return { koota: 'Graha Maitri', maxPoints: 5, obtainedPoints: 5, lordBoy, lordGirl };
  }

  // Friendly groups: [Sun, Moon, Mars, Jupiter] vs [Mercury, Venus, Saturn]
  const group1 = ['Sun', 'Moon', 'Mars', 'Jupiter'];
  const group2 = ['Mercury', 'Venus', 'Saturn'];

  const bothGroup1 = group1.includes(lordBoy) && group1.includes(lordGirl);
  const bothGroup2 = group2.includes(lordBoy) && group2.includes(lordGirl);

  let points = 1;
  if (bothGroup1 || bothGroup2) points = 4;
  else if ((lordBoy === 'Mercury' && group1.includes(lordGirl)) || (lordGirl === 'Mercury' && group1.includes(lordBoy))) {
    points = 3;
  }

  return {
    koota: 'Graha Maitri',
    maxPoints: 5,
    obtainedPoints: points,
    lordBoy,
    lordGirl
  };
}
