/** Centralized error messages for KundaliAI */

export const ERROR_MESSAGES = {
  // Validation
  INVALID_NAME:        'Please enter a valid name (2-100 characters, letters only).',
  INVALID_DATE:        'Please enter a valid birth date.',
  INVALID_TIME:        'Please enter a valid birth time in HH:MM format.',
  INVALID_PLACE:       'Please enter a valid birth place.',
  INVALID_LATITUDE:    'Latitude must be between -90 and 90 degrees.',
  INVALID_LONGITUDE:   'Longitude must be between -180 and 180 degrees.',
  DATE_IN_FUTURE:      'Birth date cannot be in the future.',
  DATE_TOO_OLD:        'Birth date must be after 1900.',

  // API
  API_UNAVAILABLE:     'The interpretation service is temporarily unavailable. Please try again.',
  API_TIMEOUT:         'The request timed out. Please check your connection and try again.',
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please wait a moment before trying again.',
  NETWORK_ERROR:       'A network error occurred. Please check your connection.',

  // Geocoding
  PLACE_NOT_FOUND:     'Could not find the location. Please try a different place name.',
  GEOCODING_FAILED:    'Location lookup failed. You can enter coordinates manually.',

  // Payment
  PAYMENT_FAILED:      'Payment could not be processed. Please try again or use a different method.',
  SESSION_EXPIRED:     'Your session has expired. Please refresh the page.',

  // Generic
  UNKNOWN_ERROR:       'An unexpected error occurred. Please refresh the page.',
  FEATURE_UNAVAILABLE: 'This feature is currently unavailable.',
} as const;

export type ErrorMessageKey = keyof typeof ERROR_MESSAGES;

export function getErrorMessage(key: ErrorMessageKey): string {
  return ERROR_MESSAGES[key];
}
