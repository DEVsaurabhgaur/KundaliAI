export function predictStationDirection(isCurrentlyDirect: boolean): string {
  return isCurrentlyDirect ? 'Stationing to Turn Retrograde (Vakri Ingress)' : 'Stationing to Turn Direct (Marga Ingress)';
}
