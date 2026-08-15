/**
 * Solar (Surya) Yogas
 * 1. Budhaditya Yoga: Sun + Mercury conjunction (Intellectual brilliance)
 * 2. Vesi Yoga: Planets (other than Moon/Rahu/Ketu) in 2nd from Sun
 * 3. Vosi Yoga: Planets in 12th from Sun
 * 4. Ubhayachari: Planets in both 2nd and 12th from Sun
 */

export function checkSuryaYogas(
  hasSunMercuryConjunction: boolean,
  planetsIn2ndFromSun: number,
  planetsIn12thFromSun: number
): string[] {
  const yogas: string[] = [];

  if (hasSunMercuryConjunction) {
    yogas.push('Budhaditya Yoga (Nipuna Yoga - Analytical excellence, administrative acumen)');
  }

  if (planetsIn2ndFromSun > 0 && planetsIn12thFromSun > 0) {
    yogas.push('Ubhayachari Yoga (Commanding presence, equilibrium in life, noble friends)');
  } else if (planetsIn2ndFromSun > 0) {
    yogas.push('Vesi Yoga (Eloquent speech, truthfulness, comfortable prosperity)');
  } else if (planetsIn12thFromSun > 0) {
    yogas.push('Vosi Yoga (Charitable mind, keen memory, philosophical inclinations)');
  }

  return yogas;
}
