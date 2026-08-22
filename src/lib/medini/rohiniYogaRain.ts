export function evaluateRohiniYoga(isSkyCloudyDuringTransit: boolean, windDirection: string): string {
  if (isSkyCloudyDuringTransit && ['East', 'North'].includes(windDirection)) {
    return 'Bountiful Monsoon & Supreme Agricultural Harvest.';
  }
  return 'Moderate Precipitation with local variations.';
}
