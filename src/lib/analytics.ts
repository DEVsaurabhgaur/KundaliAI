/** Analytics event tracking constants for KundaliAI */

export const ANALYTICS_EVENTS = {
  // Chart generation
  CHART_GENERATED:          'chart_generated',
  CHART_GENERATION_FAILED:  'chart_generation_failed',
  CHART_DOWNLOADED:         'chart_downloaded',
  CHART_SHARED:             'chart_shared',
  CHART_COPIED:             'chart_copied',

  // Navigation
  PAGE_VIEW:                'page_view',
  TAB_SWITCHED:             'tab_switched',

  // Engagement
  INTERPRETATION_READ:      'interpretation_read',
  INTERPRETATION_EXPANDED:  'interpretation_expanded',
  SUPPORT_CHAT_OPENED:      'support_chat_opened',

  // Conversion
  PAYMENT_INITIATED:        'payment_initiated',
  PAYMENT_COMPLETED:        'payment_completed',
  PAYMENT_FAILED:           'payment_failed',

  // Errors
  GEOCODING_FAILED:         'geocoding_failed',
  API_ERROR:                'api_error',
  RATE_LIMIT_HIT:           'rate_limit_hit',
} as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

/**
 * Safely dispatch an analytics event (no-op if analytics not initialized).
 */
export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
): void {
  try {
    // Integrate with your analytics provider here (e.g., PostHog, Mixpanel, GA4)
    if (typeof window !== 'undefined' && (window as Record<string, unknown>).gtag) {
      ((window as Record<string, unknown>).gtag as Function)('event', event, properties ?? {});
    }
  } catch {
    // Never let analytics errors affect the user experience
  }
}
