/**
 * Lal Kitab Customary Remedies by House
 */

export const LAL_KITAB_HOUSE_REMEDIES: Record<number, string> = {
  1: 'Wear a pure silver coin or chain; feed cows and young girls.',
  2: 'Keep raw turmeric or yellow cloth; serve temple priests.',
  3: 'Wear silver bracelet; avoid false promises; serve younger siblings.',
  4: 'Keep Gangajal in a silver urn; feed milk to mother/elders.',
  5: 'Feed monkeys jaggery and gram; avoid excessive boasting.',
  6: 'Feed stray dogs sweet bread; avoid keeping broken brass items.',
  7: 'Serve cows with green fodder; respect marital partner.',
  8: 'Float 8 copper coins in running water; avoid taking free gifts.',
  9: 'Visit family pilgrim shrine; apply saffron tilak on forehead.',
  10: 'Feed ten blind persons; avoid wearing blue/black clothing.',
  11: 'Pour milk on roots of banyan tree; keep silver square piece.',
  12: 'Keep Saunf (fennel seeds) in a red pouch under pillow.'
};

export function getLalKitabHouseRemedy(houseNumber: number): string {
  return LAL_KITAB_HOUSE_REMEDIES[houseNumber] || 'Perform universal charity to birds and cows.';
}
