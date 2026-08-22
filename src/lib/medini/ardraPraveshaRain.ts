export function isArdraPraveshaActive(sunDegree: number): boolean {
  return sunDegree >= 66.67 && sunDegree <= 80.0; // 6°40' to 20° Gemini
}
