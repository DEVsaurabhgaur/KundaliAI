export function isWithinStationOrb(planetDeg: number, stationDeg: number): boolean {
  return Math.abs(planetDeg - stationDeg) <= 0.5;
}
