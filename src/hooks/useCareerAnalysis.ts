import { useMemo } from 'react';
import { profileCareer } from '../lib/career/careerProfiler';

export function useCareerAnalysis(tenthLord: string) {
  const careerProfile = useMemo(() => profileCareer(tenthLord), [tenthLord]);
  return { careerProfile };
}
