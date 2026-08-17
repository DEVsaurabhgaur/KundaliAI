import { useMemo } from 'react';
import { checkAmalaYoga } from '../lib/yogas/amalaYoga';
import { checkSaraswatiYoga } from '../lib/yogas/saraswatiYoga';

export function useRareYogas(has10thBenefic: boolean, hasJupiterStrong: boolean) {
  const amala = useMemo(() => checkAmalaYoga(has10thBenefic), [has10thBenefic]);
  const saraswati = useMemo(() => checkSaraswatiYoga(hasJupiterStrong, true), [hasJupiterStrong]);

  return { amalaYoga: amala, saraswatiYoga: saraswati };
}
