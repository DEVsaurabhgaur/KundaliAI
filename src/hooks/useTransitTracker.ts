import { useState } from 'react';
import { checkChandrashtama } from '../lib/chandraAshtama';

export function useTransitTracker(natalMoonSignIndex: number) {
  const [transitDate, setTransitDate] = useState<Date>(new Date());
  // Simplified transit moon simulation
  const currentTransitMoonSign = 3; // Cancer

  const status = checkChandrashtama(natalMoonSignIndex, currentTransitMoonSign);

  return { transitDate, setTransitDate, status };
}
