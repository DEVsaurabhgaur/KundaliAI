/**
 * Lucky Attributes for Numbers 1 to 9
 */

export const NUMBER_ATTRIBUTES: Record<number, { planet: string; luckyColors: string[]; luckyDays: string[]; luckyGem: string; luckyDirection: string }> = {
  1: { planet: 'Sun', luckyColors: ['Gold', 'Orange', 'Yellow'], luckyDays: ['Sunday', 'Monday'], luckyGem: 'Ruby', luckyDirection: 'East' },
  2: { planet: 'Moon', luckyColors: ['White', 'Cream', 'Silver'], luckyDays: ['Monday', 'Sunday'], luckyGem: 'Pearl', luckyDirection: 'Northwest' },
  3: { planet: 'Jupiter', luckyColors: ['Yellow', 'Saffron', 'Purple'], luckyDays: ['Thursday', 'Tuesday'], luckyGem: 'Yellow Sapphire', luckyDirection: 'Northeast' },
  4: { planet: 'Rahu', luckyColors: ['Blue', 'Grey', 'Electric Blue'], luckyDays: ['Saturday', 'Sunday'], luckyGem: 'Hessonite', luckyDirection: 'Southwest' },
  5: { planet: 'Mercury', luckyColors: ['Green', 'Turquoise', 'White'], luckyDays: ['Wednesday', 'Friday'], luckyGem: 'Emerald', luckyDirection: 'North' },
  6: { planet: 'Venus', luckyColors: ['White', 'Pink', 'Light Blue'], luckyDays: ['Friday', 'Tuesday'], luckyGem: 'Diamond', luckyDirection: 'Southeast' },
  7: { planet: 'Ketu', luckyColors: ['Light Green', 'White', 'Ochre'], luckyDays: ['Monday', 'Wednesday'], luckyGem: "Cat's Eye", luckyDirection: 'Northeast' },
  8: { planet: 'Saturn', luckyColors: ['Dark Blue', 'Black', 'Purple'], luckyDays: ['Saturday', 'Friday'], luckyGem: 'Blue Sapphire', luckyDirection: 'West' },
  9: { planet: 'Mars', luckyColors: ['Red', 'Crimson', 'Rose'], luckyDays: ['Tuesday', 'Thursday'], luckyGem: 'Red Coral', luckyDirection: 'South' }
};

export function getLuckyAttributes(number: number) {
  return NUMBER_ATTRIBUTES[number] || NUMBER_ATTRIBUTES[1];
}
