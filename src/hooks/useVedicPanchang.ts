import { useState, useEffect } from 'react';
import { calculateInauspiciousSlots } from '../lib/inauspiciousTimings';
import { calculateAuspiciousSlots } from '../lib/auspiciousTimings';

export function useVedicPanchang(date: Date = new Date()) {
  const [panchang, setPanchang] = useState(() => ({
    inauspicious: calculateInauspiciousSlots(date.getDay()),
    auspicious: calculateAuspiciousSlots()
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setPanchang({
        inauspicious: calculateInauspiciousSlots(now.getDay()),
        auspicious: calculateAuspiciousSlots()
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return panchang;
}
