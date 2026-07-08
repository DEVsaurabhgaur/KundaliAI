/** LocalStorage/SessionStorage key constants for KundaliAI */

export const STORAGE_KEYS = {
  LAST_BIRTH_DETAILS:   'kundali_last_birth_details',
  CHART_HISTORY:        'kundali_chart_history',
  PREFERRED_LANGUAGE:   'kundali_language',
  AYANAMSHA_SYSTEM:     'kundali_ayanamsha',
  THEME:                'kundali_theme',
  SESSION_TOKEN:        'kundali_session_token',
  GENERATION_COUNT:     'kundali_generation_count',
  LAST_GENERATED_AT:    'kundali_last_generated_at',
  DISMISSED_BANNERS:    'kundali_dismissed_banners',
  REFERRAL_CODE:        'kundali_referral',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/**
 * Safely get a JSON value from localStorage.
 */
export function getStoredJSON<T>(key: StorageKey): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Safely set a JSON value in localStorage.
 */
export function setStoredJSON<T>(key: StorageKey, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be full or unavailable (e.g., private browsing)
  }
}

/**
 * Remove a key from localStorage.
 */
export function removeStored(key: StorageKey): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore
  }
}
