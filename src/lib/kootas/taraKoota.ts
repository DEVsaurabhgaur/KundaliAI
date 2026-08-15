/**
 * Tara Koota (3 Points Max)
 * Measures health, destiny, and mutual well-being through lunar birth stars.
 */

export function calculateTaraKoota(boyNakshatraIndex: number, girlNakshatraIndex: number) {
  const taraBoyToGirl = (((girlNakshatraIndex - boyNakshatraIndex + 27) % 27) % 9) + 1;
  const taraGirlToBoy = (((boyNakshatraIndex - girlNakshatraIndex + 27) % 27) % 9) + 1;

  const isBoyBenefic = [2, 4, 6, 8, 9].includes(taraBoyToGirl);
  const isGirlBenefic = [2, 4, 6, 8, 9].includes(taraGirlToBoy);

  let points = 0;
  if (isBoyBenefic && isGirlBenefic) points = 3;
  else if (isBoyBenefic || isGirlBenefic) points = 1.5;

  return {
    koota: 'Tara',
    maxPoints: 3,
    obtainedPoints: points,
    taraBoyToGirl,
    taraGirlToBoy,
    isCompatible: points >= 1.5
  };
}
