/**
 * Lal Kitab Ancestral Karmic Debts (Rinas)
 */

export interface LalKitabDebt {
  debtName: string;
  cause: string;
  symptom: string;
  remedy: string;
}

export const LAL_KITAB_DEBTS: Record<string, LalKitabDebt> = {
  PitruRin: {
    debtName: 'Pitru Rin (Father’s Debt)',
    cause: 'Affliction of Jupiter/Sun in 2nd, 5th, 9th, or 12th house by Saturn/Rahu',
    symptom: 'Hair loss, loss of honor, recurring obstacles to progeny',
    remedy: 'Collect equal money from all blood family members and perform sacred charity.'
  },
  MatruRin: {
    debtName: 'Matru Rin (Mother’s Debt)',
    cause: 'Affliction of Moon in 4th house by Ketu',
    symptom: 'Financial instability, anxiety, health issues to maternal relatives',
    remedy: 'Collect silver from all blood relatives and submerge into flowing pure river water.'
  }
};
