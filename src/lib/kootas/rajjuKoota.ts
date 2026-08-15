/**
 * Rajju Koota (Rope / Longevity of Marriage Bond)
 * 5 Types: Shiro (Head), Kantha (Neck), Udara (Stomach), Kati (Waist), Pada (Feet)
 * Matching Rajju is considered unfavorable; distinct Rajju is required.
 */

const NAKSHATRA_RAJJU = [
  'Pada', 'Kati', 'Udara', 'Kantha', 'Shiro', 'Shiro',
  'Kantha', 'Udara', 'Kati', 'Pada', 'Kati', 'Udara',
  'Kantha', 'Shiro', 'Kantha', 'Udara', 'Kati', 'Pada',
  'Pada', 'Kati', 'Udara', 'Kantha', 'Shiro', 'Shiro',
  'Kantha', 'Udara', 'Kati'
];

export function checkRajjuKoota(boyNak: number, girlNak: number) {
  const rajjuBoy = NAKSHATRA_RAJJU[boyNak % 27];
  const rajjuGirl = NAKSHATRA_RAJJU[girlNak % 27];

  const hasDosha = rajjuBoy === rajjuGirl;
  return {
    hasRajjuDosha: hasDosha,
    boyRajju: rajjuBoy,
    girlRajju: rajjuGirl,
    isCompatible: !hasDosha
  };
}
