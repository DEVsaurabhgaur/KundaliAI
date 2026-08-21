export function calculateBSPKarmicBalance(saturnHouse: number, jupiterHouse: number): string {
  const dist = ((jupiterHouse - saturnHouse + 12) % 12) + 1;
  return [5, 9].includes(dist) ? 'High Divine Dharma & Karmic Reward' : 'Standard Karmic Evolution';
}
