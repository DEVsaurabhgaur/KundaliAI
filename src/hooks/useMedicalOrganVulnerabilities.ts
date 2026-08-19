import { useMemo } from 'react';
import { getOrganForHouse } from '../lib/medical/bhavaOrganMapping';

export function useMedicalOrganVulnerabilities(afflictedHouse: number) {
  const organ = useMemo(() => getOrganForHouse(afflictedHouse), [afflictedHouse]);
  return { organVulnerability: organ };
}
