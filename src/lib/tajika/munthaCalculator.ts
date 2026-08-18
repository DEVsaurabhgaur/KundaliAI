/**
 * Muntha (Progressed Annual Ascendant) in Tajika
 * Formula: Muntha = (Natal Lagna Sign + Completed Years of Age) % 12
 */

const SIGN_LORDS = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'];

export function calculateMuntha(natalLagnaSignIndex: number, completedAgeYears: number) {
  const munthaSign = (natalLagnaSignIndex + completedAgeYears) % 12;
  const munthesha = SIGN_LORDS[munthaSign];

  return {
    munthaSignIndex: munthaSign,
    muntheshaLord: munthesha,
    isAuspiciousHouse: [1, 2, 3, 5, 9, 10, 11].includes(munthaSign + 1)
  };
}
