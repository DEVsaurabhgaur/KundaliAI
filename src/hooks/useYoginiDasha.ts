import { useMemo } from 'react';
import { calculateYoginiDasha, YoginiPeriod } from '../lib/dasha/yoginiDasha';

export function useYoginiDasha(nakshatraIndex: number, birthYear: number) {
  const periods: YoginiPeriod[] = useMemo(() => {
    return calculateYoginiDasha(nakshatraIndex, birthYear);
  }, [nakshatraIndex, birthYear]);

  const activePeriod = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return periods.find(p => currentYear >= p.startYear && currentYear < p.endYear) || periods[0];
  }, [periods]);

  return { periods, activePeriod };
}
