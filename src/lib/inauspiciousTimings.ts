/**
 * Inauspicious Vedic Muhurta Timers: Rahu Kalam, Yamaganda, Gulika Kalam
 * Day duration (Sunrise to Sunset) divided into 8 equal segments (Prahars).
 */

export interface TimeSlot {
  name: string;
  startTime: string;
  endTime: string;
  isHarmful: boolean;
}

// 8ths of day allocated per weekday (0=Sun, 1=Mon, ..., 6=Sat)
const RAHU_SLOTS = [8, 2, 7, 5, 6, 4, 3];
const YAMA_SLOTS = [5, 4, 3, 2, 1, 7, 6];
const GULIKA_SLOTS = [7, 6, 5, 4, 3, 2, 1];

export function calculateInauspiciousSlots(
  dayOfWeek: number, // 0 to 6
  sunriseMinutes: number = 360, // 06:00 AM in minutes
  sunsetMinutes: number = 1080 // 06:00 PM in minutes
): TimeSlot[] {
  const dayDuration = sunsetMinutes - sunriseMinutes;
  const slotLength = dayDuration / 8;

  const formatMin = (m: number) => {
    const hr = Math.floor(m / 60);
    const min = Math.floor(m % 60);
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const hr12 = hr % 12 || 12;
    return `${hr12}:${String(min).padStart(2, '0')} ${ampm}`;
  };

  const getSlot = (name: string, slotNum: number): TimeSlot => {
    const start = sunriseMinutes + (slotNum - 1) * slotLength;
    const end = start + slotLength;
    return {
      name,
      startTime: formatMin(start),
      endTime: formatMin(end),
      isHarmful: true
    };
  };

  return [
    getSlot('Rahu Kalam', RAHU_SLOTS[dayOfWeek % 7]),
    getSlot('Yamaganda', YAMA_SLOTS[dayOfWeek % 7]),
    getSlot('Gulika Kalam', GULIKA_SLOTS[dayOfWeek % 7])
  ];
}
