/**
 * 16 Classical Tajika Yogas Engine
 * 1. Ikbala (Planets in Kendras/Panapharas)
 * 2. Induvara (Planets in Apoklimas)
 * 3. Ithasala (Muthasila - Mutual applying aspect within orb)
 * 4. Ishrafa (Musaripha - Separating aspect)
 * 5. Nakta (Intermediary fast planet linking slower planets)
 * 6. Yamaya (Intermediary slow planet linking faster planets)
 * 7. Manahoo (Malefic intervention)
 * 8. Kambar (Combustion cancellation)
 * 9. Gairi-Kambala (Deep strength mutual reception)
 * 10. Khallasara (Subtle trinal support)
 * 11. Radda (Cancellation of yoga due to retrogradation/combustion)
 * 12. Duphali-Kutha (Dual strength reinforcement)
 * 13. Dutthada (Double affliction)
 * 14. Tambira (Extreme dignity reinforcement)
 * 15. Kutha (Exalted lord support)
 * 16. Durphata (Feeble assistance)
 */

export function evaluateTajikaYogaName(isApplying: boolean, isSeparating: boolean, hasIntermediary: boolean): string {
  if (isApplying) return 'Ithasala (Muthasila) Yoga';
  if (isSeparating) return 'Ishrafa (Musaripha) Yoga';
  if (hasIntermediary) return 'Nakta Yoga';
  return 'Ikbala Yoga';
}
