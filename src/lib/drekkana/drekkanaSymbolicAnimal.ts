export function getDrekkanaTotem(decanateIndex1to3: number): string {
  const ANIMALS = ['Simha (Lion - Royal Courage)', 'Gaja (Elephant - Regal Majesty)', 'Garuda (Eagle - Soaring Vision)'];
  return ANIMALS[(decanateIndex1to3 - 1) % 3] || 'Ashwa (Horse)';
}
