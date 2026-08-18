/**
 * Muntha in 12 Houses of Annual Chart
 */

const MUNTHA_PHALA: Record<number, string> = {
  1: 'Physical vitality, personal honors, leadership triumph.',
  2: 'Financial accretion, family joy, commercial prosperity.',
  3: 'Courageous enterprise, victorious negotiations, short travels.',
  4: 'Real estate gains or domestic agitation (requires benefic aspect).',
  5: 'Creative breakthroughs, intellectual offspring, joyful romance.',
  6: 'Victory over rivals, resolution of debts, health discipline.',
  7: 'Partnership alliances, public acclaim, matrimonial harmony.',
  8: 'Karmic restructuring, unexpected challenges, transformation.',
  9: 'Divine grace, pilgrimage, mentor blessings, high fortune.',
  10: 'Peak career achievement, governmental honors, business expansion.',
  11: 'Monetary windfalls, wish fulfillment, expansive social circle.',
  12: 'Spiritual detachment, foreign expenditures, retreat.'
};

export function getMunthaHousePhala(houseNum: number): string {
  return MUNTHA_PHALA[houseNum] || 'Auspicious unfolding of annual fate.';
}
