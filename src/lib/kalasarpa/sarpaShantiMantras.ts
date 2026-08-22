export const SARPA_MANTRA_COUNTS: Record<string, { count: number; mantra: string }> = {
  Ananta: { count: 18000, mantra: 'Om Anantaya Namah' },
  Vasuki: { count: 18000, mantra: 'Om Vasukaye Namah' },
  Takshaka: { count: 18000, mantra: 'Om Takshakaya Namah' },
  General: { count: 108, mantra: 'Om Namah Shivaya' }
};

export function getSarpaShantiDetails(yogaType: string) {
  return SARPA_MANTRA_COUNTS[yogaType] || SARPA_MANTRA_COUNTS['General'];
}
