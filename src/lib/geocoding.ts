/** Geocoding utilities for birth place lookup */

export interface GeocodingResult {
  displayName: string;
  latitude: number;
  longitude: number;
  timezone?: string;
  country?: string;
  state?: string;
  city?: string;
}

/**
 * Search for a place using the Nominatim OpenStreetMap API.
 * Free, no API key required.
 */
export async function geocodePlace(query: string): Promise<GeocodingResult[]> {
  if (!query || query.trim().length < 2) return [];

  const url = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('q', query.trim());
  url.searchParams.set('format', 'json');
  url.searchParams.set('limit', '5');
  url.searchParams.set('addressdetails', '1');

  const response = await fetch(url.toString(), {
    headers: { 'Accept-Language': 'en', 'User-Agent': 'KundaliAI/1.0' },
  });

  if (!response.ok) throw new Error(`Geocoding failed: ${response.status}`);

  const data = await response.json() as Array<{
    display_name: string;
    lat: string;
    lon: string;
    address?: { country?: string; state?: string; city?: string; town?: string };
  }>;

  return data.map(item => ({
    displayName: item.display_name,
    latitude:    parseFloat(item.lat),
    longitude:   parseFloat(item.lon),
    country:     item.address?.country,
    state:       item.address?.state,
    city:        item.address?.city ?? item.address?.town,
  }));
}

/**
 * Estimate timezone offset from longitude (rough approximation).
 * Each 15Â° of longitude = 1 hour offset from UTC.
 */
export function estimateTimezoneFromLongitude(longitude: number): string {
  const offsetHours = Math.round(longitude / 15);
  const sign = offsetHours >= 0 ? '+' : '-';
  const abs = Math.abs(offsetHours);
  return `UTC${sign}${String(abs).padStart(2, '0')}:00`;
}
