export function evaluateCelestialOmen(hasSolarHalo: boolean, isClearSkyRainbow: boolean) {
  return {
    omen: hasSolarHalo || isClearSkyRainbow ? 'Mahodaya (Supreme Auspiciousness & State Favor)' : 'Samanya Sky'
  };
}
