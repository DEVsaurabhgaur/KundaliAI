/** User-facing error messages for KundaliAI */
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required.',
  INVALID_DATE: 'Please enter a valid date.',
  INVALID_TIME: 'Please enter a valid time in HH:MM format.',
  INVALID_YEAR: 'Year must be between 1900 and 2100.',
  INVALID_PLACE: 'Please enter a valid birth place.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  API_ERROR: 'Failed to generate kundali. Please try again.',
  PAYMENT_FAILED: 'Payment failed. Please try again or contact support.',
  RATE_LIMITED: 'Too many requests. Please wait a moment before trying again.',
  UNKNOWN_ERROR: 'An unexpected error occurred. Please refresh the page.',
} as const;

export type ErrorKey = keyof typeof ERROR_MESSAGES;

