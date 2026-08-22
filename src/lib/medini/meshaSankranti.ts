/**
 * Mesha Sankranti (Sun entering 0° Aries) Mundane Forecast
 */

export function evaluateMeshaSankranti(weekdayIndex0to6: number): string {
  const DAYS = ['Sunday (Raja: Sun - Sovereign Strength)', 'Monday (Raja: Moon - Bountiful Agriculture)', 'Tuesday (Raja: Mars - Military Dynamism)', 'Wednesday (Raja: Mercury - Commercial Boom)', 'Thursday (Raja: Jupiter - Spiritual Peace & Harmony)', 'Friday (Raja: Venus - Luxury & Artistic Flourishing)', 'Saturday (Raja: Saturn - Labor & Industrial Growth)'];
  return DAYS[weekdayIndex0to6] || DAYS[0];
}
