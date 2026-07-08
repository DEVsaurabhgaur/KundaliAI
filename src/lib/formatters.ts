/** Display formatters for KundaliAI */

/**
 * Format degrees as decimal (e.g., "23.45Â°")
 */
export function formatDegrees(deg: number): string {
  return deg.toFixed(2) + String.fromCharCode(176);
}

/**
 * Format degrees in degreesÂ°minutes'seconds" notation
 */
export function formatDMS(deg: number): string {
  const d = Math.floor(Math.abs(deg));
  const m = Math.floor((Math.abs(deg) - d) * 60);
  const s = Math.round(((Math.abs(deg) - d) * 60 - m) * 60);
  return `${d}Â°${m}'${s}"`;
}

/**
 * Format birth date in long Indian locale format
 */
export function formatBirthDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
}

/**
 * Format time string (HH:mm) to 12-hour format
 */
export function formatTime12h(time: string): string {
  const parts = time.split(':').map(Number);
  const h = parts[0]; const m = parts[1];
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return hour12 + ':' + String(m).padStart(2, '0') + ' ' + ampm;
}

/**
 * Format house number with ordinal suffix
 */
export function formatHouseLabel(house: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const suffix = house <= 3 ? suffixes[house] : suffixes[0];
  return house + suffix + ' House';
}

/**
 * Format amount as Indian Rupees
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);
}

/**
 * Format a Date object to a relative time string (e.g., "2 days ago")
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 60) return 'just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} hour${diffHr !== 1 ? 's' : ''} ago`;
  const diffDays = Math.floor(diffHr / 24);
  return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
}
