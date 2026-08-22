export function formatStationEpoch(degree: number, dateMs: number) {
  return {
    stationDegree: Number(degree.toFixed(2)),
    stationDate: new Date(dateMs).toISOString(),
    status: 'Stambhana Stationary (Intense Energy Node)'
  };
}
