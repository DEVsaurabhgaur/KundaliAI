/** Display formatters for KundaliAI */

export function formatDegrees(deg: number): string {
  return deg.toFixed(2) + String.fromCharCode(176);
}

export function formatBirthDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function formatTime12h(time: string): string {
  const parts = time.split(':').map(Number);
  const h = parts[0]; const m = parts[1];
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return hour12 + ':' + String(m).padStart(2, '0') + ' ' + ampm;
}

export function formatHouseLabel(house: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const suffix = house <= 3 ? suffixes[house] : suffixes[0];
  return house + suffix + ' House';
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);
}

