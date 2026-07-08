# Changelog

All notable changes to KundaliAI are documented here.

## [Unreleased] â€” 2026-07-08

### Added
- `nakshatra.ts`: 27 Nakshatra constants, lords, and getNakshatraFromDegrees()
- `dasha.ts`: Vimshottari dasha period durations and calculateDashaPeriods()
- `dignity.ts`: Planetary exaltation/debilitation/own-sign dignity table
- `yogas.ts`: Pancha Mahapurusha, Dhana, and Dosha yoga definitions
- `ayanamsha.ts`: Lahiri/Raman/KP/Fagan-Bradley ayanamsha calculator
- `houseStrength.ts`: Kendra/Trikona/Dusthana house classification and Bhava significations
- `aspects.ts`: Vedic Drishti (planetary aspect) calculator
- `mangalDosha.ts`: Mangal Dosha checker with severity and remedies
- `kaalSarp.ts`: Kaal Sarp Dosha checker with all 12 types
- `panchang.ts`: Tithi/Vara/Nakshatra/Yoga/Karana calculator
- `muhurta.ts`: Choghadiya Muhurta auspicious timing definitions
- `sadeSati.ts`: Saturn Sade Sati phase calculator
- `grahaMaitri.ts`: Natural planetary friendship/enmity table
- `geocoding.ts`: Nominatim geocoding integration and timezone estimation
- `lagna.ts`: Ascendant sign estimator with descriptions
- `planetDescriptions.ts`: Detailed planet metadata (deity, element, body parts)
- `seo.ts`: Meta tags, page titles, and JSON-LD structured data
- `analytics.ts`: Event tracking constants and trackEvent() helper
- `chartExport.ts`: Text file, SVG download, and formatted report export
- `useChartHistory.ts`: Persistent chart generation history hook
- `useDebounce.ts`: Value debounce hook
- `useLocalStorage.ts`: Typed localStorage hook
- `useClipboard.ts`: Clipboard copy hook with fallback
- `useCountdown.ts`: Countdown timer hook
- `useWindowSize.ts`: Responsive window size hook
- `useDarkMode.ts`: System-aware dark mode toggle
- `usePlanetTooltip.ts`: Chart hover tooltip state hook
- `useGenerationCount.ts`: Kundali generation counter hook
- `useIntersectionObserver.ts`: Scroll visibility hook

### Changed
- `types.ts`: Extended KundaliData with nakshatra, dasha, yoga, and HouseNumber type
- `formatters.ts`: Added DMS formatter, relative time, and JSDoc
- `stringUtils.ts`: Added titleCase, slugify, isValidName, zeroPad
- `dateUtils.ts`: Added addYears, yearsBetween, toISODate, parseISODate
- `errorMessages.ts`: Centralized all error messages as typed constants
- `colors.ts`: Expanded color palette with planet glows and rashi colors
- `storageKeys.ts`: Added typed localStorage helpers
- `logger.ts`: Improved with structured formatting and dev-only filtering
- `constants.ts`: Added Kendra/Trikona/Dusthana arrays, cache TTL, v1.1.0
- `rate-limiter.ts`: Added getRemainingRequests() and getMsUntilReset()
- `validationUtils.ts`: Added validateBirthDate, validateBirthTime, validateCoordinates

## [1.0.0] â€” 2026-07-01

### Added
- Initial release of KundaliAI
- AI-powered Vedic birth chart generation
- South Indian style chart visualization
- Payment integration via Razorpay
- Support chat widget
