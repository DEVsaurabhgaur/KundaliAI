/** localStorage key constants - centralized to prevent typos */
export const STORAGE_KEYS = {
  LAST_BIRTH_DETAILS: 'kundali_last_birth_details',
  USER_PREFERENCES: 'kundali_user_preferences',
  GENERATED_CHARTS: 'kundali_generated_charts',
  SESSION_ID: 'kundali_session_id',
  THEME: 'kundali_theme',
  CONSENT_GIVEN: 'kundali_consent',
  RATE_LIMIT_STATE: 'kundali_rate_limit',
} as const;
export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

