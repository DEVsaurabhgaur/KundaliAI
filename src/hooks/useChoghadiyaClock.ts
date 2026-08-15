import { useState, useEffect } from 'react';
import { getDayChoghadiya, ChoghadiyaSlot } from '../lib/choghadiya';

export function useChoghadiyaClock() {
  const [currentSlotIndex, setCurrentSlotIndex] = useState(0);
  const [slots, setSlots] = useState<ChoghadiyaSlot[]>(() => getDayChoghadiya(new Date().getDay()));

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setSlots(getDayChoghadiya(now.getDay()));
      const hour = now.getHours();
      setCurrentSlotIndex(Math.floor((hour % 12) / 1.5) % 8);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return { slots, currentSlotIndex, currentSlot: slots[currentSlotIndex] };
}
