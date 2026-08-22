export const SAMVATSARA_60 = [
  'Prabhava', 'Vibhava', 'Shukla', 'Pramoda', 'Prajapati', 'Angirasa', 'Shrimukha',
  'Bhava', 'Yuva', 'Dhatri', 'Ishvara', 'Bahudhanya', 'Pramathi', 'Vikrama'
];

export function getSamvatsaraName(yearOffsetFromEpoch: number): string {
  return SAMVATSARA_60[yearOffsetFromEpoch % SAMVATSARA_60.length] || 'Prabhava';
}
