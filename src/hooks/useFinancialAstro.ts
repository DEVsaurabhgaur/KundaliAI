import { useMemo } from 'react';
import { COMMODITY_RULERS } from '../lib/career/financialAstrology';

export function useFinancialAstro() {
  const commodityList = useMemo(() => Object.entries(COMMODITY_RULERS), []);
  return { commodityList };
}
