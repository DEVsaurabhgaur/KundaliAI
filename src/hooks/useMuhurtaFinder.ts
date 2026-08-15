import { useState, useMemo } from 'react';
import { getDayChoghadiya } from '../lib/choghadiya';

export function useMuhurtaFinder() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const choghadiyaSlots = useMemo(() => {
    return getDayChoghadiya(selectedDay);
  }, [selectedDay]);

  const bestSlots = useMemo(() => {
    return choghadiyaSlots.filter(s => s.isAuspicious);
  }, [choghadiyaSlots]);

  return { selectedDay, setSelectedDay, choghadiyaSlots, bestSlots };
}
