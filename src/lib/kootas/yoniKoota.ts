/**
 * Yoni Koota (4 Points Max)
 * Biological, sexual, and physical compatibility mapped to 14 animal archetypes.
 */

// 27 Nakshatras to 14 Animal Yonis
const NAKSHATRA_YONI = [
  'Horse', 'Elephant', 'Sheep', 'Serpent', 'Serpent', 'Dog',
  'Cat', 'Sheep', 'Cat', 'Rat', 'Rat', 'Cow',
  'Buffalo', 'Tiger', 'Buffalo', 'Tiger', 'Deer', 'Deer',
  'Dog', 'Monkey', 'Mongoose', 'Monkey', 'Lion', 'Horse',
  'Lion', 'Cow', 'Elephant'
];

export function calculateYoniKoota(boyNak: number, girlNak: number) {
  const yoniBoy = NAKSHATRA_YONI[boyNak % 27];
  const yoniGirl = NAKSHATRA_YONI[girlNak % 27];

  let points = 2; // Default neutral
  if (yoniBoy === yoniGirl) points = 4; // Same animal = Supreme
  else if (
    (yoniBoy === 'Horse' && yoniGirl === 'Buffalo') ||
    (yoniBoy === 'Elephant' && yoniGirl === 'Lion') ||
    (yoniBoy === 'Cat' && yoniGirl === 'Rat') ||
    (yoniBoy === 'Serpent' && yoniGirl === 'Mongoose') ||
    (yoniBoy === 'Dog' && yoniGirl === 'Deer') ||
    (yoniBoy === 'Monkey' && yoniGirl === 'Sheep')
  ) {
    points = 0; // Natural sworn enemies
  } else {
    points = 3; // Friendly animals
  }

  return {
    koota: 'Yoni',
    maxPoints: 4,
    obtainedPoints: points,
    boyYoni: yoniBoy,
    girlYoni: yoniGirl,
    isCompatible: points >= 2
  };
}
