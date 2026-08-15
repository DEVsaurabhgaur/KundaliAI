/**
 * Pancha Mahapurusha Yogas (Five Great Human Archetypes)
 * Formed when Mars, Mercury, Jupiter, Venus, or Saturn occupies own or exaltation sign in a Kendra house (1, 4, 7, 10).
 */

export interface MahapurushaYoga {
  name: string;
  planet: string;
  archetype: string;
  traits: string;
}

export function checkMahapurushaYoga(
  planet: string,
  house: number,
  isOwnOrExalted: boolean
): MahapurushaYoga | null {
  if (![1, 4, 7, 10].includes(house) || !isOwnOrExalted) return null;

  switch (planet) {
    case 'Mars':
      return { name: 'Ruchaka Yoga', planet: 'Mars', archetype: 'The Victorious Warrior', traits: 'Immense courage, physical prowess, leadership in defense or industry.' };
    case 'Mercury':
      return { name: 'Bhadra Yoga', planet: 'Mercury', archetype: 'The Master Scholar', traits: 'Extraordinary intellect, communicative genius, long life, and administrative charm.' };
    case 'Jupiter':
      return { name: 'Hamsa Yoga', planet: 'Jupiter', archetype: 'The Divine Sage', traits: 'Spiritual nobility, revered by leaders, righteous conduct, and profound wisdom.' };
    case 'Venus':
      return { name: 'Malavya Yoga', planet: 'Venus', archetype: 'The Sovereign Artist', traits: 'Refined aesthetics, lavish prosperity, charismatic magnetism, and joyful marital life.' };
    case 'Saturn':
      return { name: 'Sasa Yoga', planet: 'Saturn', archetype: 'The Unyielding Sovereign', traits: 'Command over masses, enduring patience, resilience, and judicial authority.' };
    default:
      return null;
  }
}
