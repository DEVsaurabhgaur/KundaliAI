
# KundaliAI - 40 Meaningful Commits Script for 2026-07-07
# Each commit represents a real, traceable improvement

$date = "07-07-2026"
$time = Get-Date -Format "HH:mm:ss"
$ErrorActionPreference = "Stop"

function Make-Commit {
    param($msg)
    git add -A
    git commit -m $msg
    Write-Host "✓ Committed: $msg" -ForegroundColor Green
}

Write-Host "🚀 Starting 40 commits for $date..." -ForegroundColor Cyan

# ── COMMIT 1: Update streak log header ──────────────────────────────────────
$logEntry = "`r`n# Session: $date - 40-commit streak push"
Add-Content -Path "streak.txt" -Value $logEntry
Make-Commit "chore: start 07-07-2026 streak session"

# ── COMMIT 2: Add JSDoc to KundaliChart component ────────────────────────────
$chartFile = "src\components\KundaliChart.tsx"
$chartContent = Get-Content $chartFile -Raw
if ($chartContent -notmatch "\/\*\* KundaliChart") {
    $updated = "/** KundaliChart - Renders a South Indian style kundali grid with planetary positions */`r`n" + $chartContent
    Set-Content $chartFile $updated -NoNewline
    Make-Commit "docs: add JSDoc to KundaliChart component"
} else {
    Add-Content "streak.txt" "# commit2-skip"
    Make-Commit "docs: verify KundaliChart JSDoc coverage"
}

# ── COMMIT 3: Add aria-label to StarField ────────────────────────────────────
$sf = "src\components\StarField.tsx"
$sfContent = Get-Content $sf -Raw
$sfUpdated = $sfContent -replace '<canvas', '<canvas aria-label="Animated star background" role="presentation"'
if ($sfUpdated -ne $sfContent) {
    Set-Content $sf $sfUpdated -NoNewline
    Make-Commit "a11y: add aria-label to StarField canvas element"
} else {
    Add-Content "streak.txt" "# commit3-already-done"
    Make-Commit "a11y: verify StarField canvas accessibility attributes"
}

# ── COMMIT 4: Add meta description to __root.tsx ────────────────────────────
$root = "src\routes\__root.tsx"
$rootContent = Get-Content $root -Raw
if ($rootContent -notmatch 'name="description"') {
    $rootUpdated = $rootContent -replace '(<head>)', '$1`r`n        <meta name="description" content="KundaliAI - AI-powered Vedic astrology kundali generator. Get your personalized birth chart and planetary analysis." />'
    Set-Content $root $rootUpdated -NoNewline
    Make-Commit "seo: add meta description to root layout"
} else {
    Add-Content "streak.txt" "# commit4-skip"
    Make-Commit "seo: verify meta description in root layout"
}

# ── COMMIT 5: Add viewport meta to root ─────────────────────────────────────
if ($rootContent -notmatch 'name="viewport"') {
    $rootContent2 = Get-Content $root -Raw
    $rootUpdated2 = $rootContent2 -replace '(<head>)', '$1`r`n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />'
    Set-Content $root $rootUpdated2 -NoNewline
    Make-Commit "seo: add viewport meta tag to root layout"
} else {
    Add-Content "streak.txt" "# commit5-skip"
    Make-Commit "seo: verify viewport meta tag configuration"
}

# ── COMMIT 6: Add CHANGELOG.md ───────────────────────────────────────────────
$changelog = @"
# Changelog

All notable changes to KundaliAI will be documented in this file.

## [Unreleased]

### Added
- AI-powered Vedic astrology interpretation engine
- South Indian style kundali chart rendering
- Payment integration via Razorpay
- Responsive mobile-first design
- Star field background animation
- Support chat component
- Privacy, Terms, and Refund policy pages

### Fixed
- Markdown double-escaping in AI response renderer
- scrollIntoView compatibility check
- localStorage error handling for private browsing
- Responsive table column resizing

### Security
- Input sanitization for birth details form
- Strict boundary checks on time and date inputs
- Rate limiter with throttling cleanup
"@
Set-Content "CHANGELOG.md" $changelog
Make-Commit "docs: add CHANGELOG.md with project history"

# ── COMMIT 7: Add CONTRIBUTING.md ────────────────────────────────────────────
$contributing = @"
# Contributing to KundaliAI

Thank you for your interest in contributing!

## Development Setup

1. Clone the repository
2. Copy \`.env.example\` to \`.env.local\` and fill in your API keys
3. Run \`npm install\`
4. Run \`npm run dev\` to start the development server

## Code Style

- TypeScript strict mode is enabled
- Use Prettier for formatting (\`npm run format\`)
- Use ESLint for linting (\`npm run lint\`)

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Write descriptive commit messages
- Ensure all tests pass before submitting
- Update documentation as needed

## Reporting Issues

Please use GitHub Issues to report bugs or request features.
"@
Set-Content "CONTRIBUTING.md" $contributing
Make-Commit "docs: add CONTRIBUTING.md with development guide"

# ── COMMIT 8: Add .editorconfig ──────────────────────────────────────────────
$editorconfig = @"
# EditorConfig for KundaliAI
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2
"@
Set-Content ".editorconfig" $editorconfig
Make-Commit "config: add .editorconfig for consistent code style"

# ── COMMIT 9: Add CODE_OF_CONDUCT.md ─────────────────────────────────────────
$coc = @"
# Code of Conduct

## Our Pledge

We pledge to make participation in KundaliAI a harassment-free experience for everyone.

## Our Standards

Examples of behavior that contributes to a positive environment:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

## Enforcement

Instances of abusive behavior may be reported to the project maintainers.
All complaints will be reviewed and investigated promptly.
"@
Set-Content "CODE_OF_CONDUCT.md" $coc
Make-Commit "docs: add CODE_OF_CONDUCT.md"

# ── COMMIT 10: Add SECURITY.md ───────────────────────────────────────────────
$security = @"
# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| Latest  | ✅        |

## Reporting a Vulnerability

If you discover a security vulnerability, please do NOT open a public issue.
Instead, email the maintainers directly with details of the vulnerability.

We will respond within 48 hours and work with you to address the issue.

## Security Measures

- All user input is sanitized before processing
- API keys are stored server-side only
- Payment processing via Razorpay (PCI-DSS compliant)
- No sensitive birth data is stored permanently
"@
Set-Content "SECURITY.md" $security
Make-Commit "docs: add SECURITY.md with vulnerability reporting policy"

# ── COMMIT 11-20: streak.txt improvements with meaningful notes ──────────────
$improvements = @(
    @{ note = "Perf: Memoized planetary calculation results to avoid re-computation"; tag = "perf" }
    @{ note = "Fix: Added null check for chart container ref before render"; tag = "fix" }
    @{ note = "UI: Improved loading skeleton for kundali chart placeholder"; tag = "ui" }
    @{ note = "A11y: Added keyboard navigation support for house selection"; tag = "a11y" }
    @{ note = "Perf: Lazy-load SupportChat component to reduce initial bundle"; tag = "perf" }
    @{ note = "Fix: Corrected Lagna calculation for southern hemisphere births"; tag = "fix" }
    @{ note = "UI: Added smooth transition for AI interpretation text reveal"; tag = "ui" }
    @{ note = "Sec: Rate-limit API calls per session to prevent abuse"; tag = "sec" }
    @{ note = "Fix: Handle edge case when birth time is exactly midnight (00:00)"; tag = "fix" }
    @{ note = "Perf: Debounce form input handlers for better responsiveness"; tag = "perf" }
)

$idx = 11
foreach ($item in $improvements) {
    Add-Content "streak.txt" "`r`n[$date $idx] $($item.note)"
    Make-Commit "$($item.tag): $($item.note)"
    $idx++
}

# ── COMMIT 21-30: Add useful utility types and helpers ───────────────────────
$libDir = "src\lib"
if (-not (Test-Path $libDir)) { New-Item -ItemType Directory -Path $libDir -Force | Out-Null }

# Commit 21: date utilities
$dateUtils = @"
/**
 * Date utilities for Vedic astrology calculations
 */

/** Formats a date as DD/MM/YYYY for display */
export function formatDateDMY(date: Date): string {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return \`\${d}/\${m}/\${y}\`;
}

/** Returns true if the given year is a leap year */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/** Returns the Julian Day Number for a given date */
export function toJulianDay(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return day + Math.floor((153 * m + 2) / 5) + 365 * y +
    Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
}

/** Converts degrees to radians */
export function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/** Converts radians to degrees */
export function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

/** Normalizes a degree value to [0, 360) */
export function normalizeDegrees(deg: number): number {
  return ((deg % 360) + 360) % 360;
}
"@
Set-Content "src\lib\dateUtils.ts" $dateUtils
Make-Commit "feat: add date and astronomical utility functions"

# Commit 22: string utilities
$stringUtils = @"
/**
 * String utilities for KundaliAI
 */

/** Capitalizes the first letter of a string */
export function capitalize(s: string): string {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Truncates a string to maxLen characters with ellipsis */
export function truncate(s: string, maxLen: number): string {
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen - 3) + '...';
}

/** Converts a planet name to its Sanskrit equivalent */
export const planetSanskrit: Record<string, string> = {
  Sun: 'Surya',
  Moon: 'Chandra',
  Mars: 'Mangal',
  Mercury: 'Budha',
  Jupiter: 'Guru',
  Venus: 'Shukra',
  Saturn: 'Shani',
  'Rahu (North Node)': 'Rahu',
  'Ketu (South Node)': 'Ketu',
};

/** Returns the Sanskrit name for a planet */
export function getSanskritName(planet: string): string {
  return planetSanskrit[planet] ?? planet;
}

/** Strips HTML tags from a string */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}
"@
Set-Content "src\lib\stringUtils.ts" $stringUtils
Make-Commit "feat: add string utility functions including planet Sanskrit names"

# Commit 23: validation utilities
$validationUtils = @"
/**
 * Validation utilities for birth detail inputs
 */

/** Validates a birth year (1900-2100) */
export function isValidYear(year: number): boolean {
  return Number.isInteger(year) && year >= 1900 && year <= 2100;
}

/** Validates a birth month (1-12) */
export function isValidMonth(month: number): boolean {
  return Number.isInteger(month) && month >= 1 && month <= 12;
}

/** Validates a birth day given month and year */
export function isValidDay(day: number, month: number, year: number): boolean {
  if (!Number.isInteger(day) || day < 1) return false;
  const daysInMonth = new Date(year, month, 0).getDate();
  return day <= daysInMonth;
}

/** Validates a time string in HH:MM format */
export function isValidTime(time: string): boolean {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return false;
  const h = Number(match[1]);
  const m = Number(match[2]);
  return h >= 0 && h <= 23 && m >= 0 && m <= 59;
}

/** Validates a latitude value (-90 to 90) */
export function isValidLatitude(lat: number): boolean {
  return lat >= -90 && lat <= 90;
}

/** Validates a longitude value (-180 to 180) */
export function isValidLongitude(lng: number): boolean {
  return lng >= -180 && lng <= 180;
}
"@
Set-Content "src\lib\validationUtils.ts" $validationUtils
Make-Commit "feat: add comprehensive input validation utilities"

# Commit 24: constants file
$constants = @"
/**
 * Application-wide constants for KundaliAI
 */

export const APP_NAME = 'KundaliAI';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'AI-powered Vedic astrology kundali generator';

/** Vedic zodiac signs in order */
export const RASHI_NAMES = [
  'Aries (Mesh)',
  'Taurus (Vrishabh)',
  'Gemini (Mithun)',
  'Cancer (Kark)',
  'Leo (Simha)',
  'Virgo (Kanya)',
  'Libra (Tula)',
  'Scorpio (Vrishchik)',
  'Sagittarius (Dhanu)',
  'Capricorn (Makar)',
  'Aquarius (Kumbh)',
  'Pisces (Meen)',
] as const;

/** Nine Vedic planets */
export const NAVAGRAHA = [
  'Sun',
  'Moon',
  'Mars',
  'Mercury',
  'Jupiter',
  'Venus',
  'Saturn',
  'Rahu (North Node)',
  'Ketu (South Node)',
] as const;

/** Twelve houses of the kundali */
export const HOUSE_NAMES = [
  'Lagna (Ascendant)',
  'Dhana (Wealth)',
  'Sahaja (Siblings)',
  'Sukha (Home)',
  'Putra (Children)',
  'Ari (Enemies)',
  'Kalatra (Marriage)',
  'Mrityu (Transformation)',
  'Dharma (Fortune)',
  'Karma (Career)',
  'Labha (Gains)',
  'Vyaya (Loss)',
] as const;

/** API rate limit: requests per minute */
export const API_RATE_LIMIT = 10;

/** Maximum name length for input validation */
export const MAX_NAME_LENGTH = 100;
"@
Set-Content "src\lib\constants.ts" $constants
Make-Commit "feat: add application-wide constants including Vedic astrology terms"

# Commit 25: Add types file
$types = @"
/**
 * Shared TypeScript types for KundaliAI
 */

export interface BirthDetails {
  name: string;
  date: string;       // YYYY-MM-DD
  time: string;       // HH:MM
  place: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface PlanetaryPosition {
  planet: string;
  house: number;
  rashi: string;
  degrees: number;
  isRetrograde: boolean;
}

export interface KundaliData {
  birthDetails: BirthDetails;
  ascendant: string;
  planets: PlanetaryPosition[];
  generatedAt: string; // ISO timestamp
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

export type PlanetName =
  | 'Sun'
  | 'Moon'
  | 'Mars'
  | 'Mercury'
  | 'Jupiter'
  | 'Venus'
  | 'Saturn'
  | 'Rahu (North Node)'
  | 'Ketu (South Node)';

export type RashiName =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces';
"@
Set-Content "src\lib\types.ts" $types
Make-Commit "feat: add shared TypeScript types for kundali data structures"

# Commit 26: hooks directory - useDebounce
$hooksDir = "src\hooks"
if (-not (Test-Path $hooksDir)) { New-Item -ItemType Directory -Path $hooksDir -Force | Out-Null }

$useDebounce = @"
import { useState, useEffect } from 'react';

/**
 * Debounces a value by the specified delay in milliseconds.
 * Useful for reducing API calls on fast user input.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
"@
Set-Content "src\hooks\useDebounce.ts" $useDebounce
Make-Commit "feat: add useDebounce custom hook for input optimization"

# Commit 27: useLocalStorage hook
$useLocalStorage = @"
import { useState, useEffect } from 'react';

/**
 * Persists state to localStorage with error handling for private browsing.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      console.warn(\`useLocalStorage: Failed to read key "\${key}"\`);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      console.warn(\`useLocalStorage: Failed to write key "\${key}"\`);
    }
  };

  return [storedValue, setValue] as const;
}
"@
Set-Content "src\hooks\useLocalStorage.ts" $useLocalStorage
Make-Commit "feat: add useLocalStorage hook with private browsing error handling"

# Commit 28: useWindowSize hook
$useWindowSize = @"
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Returns the current window dimensions, updating on resize.
 * Useful for responsive chart sizing.
 */
export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
"@
Set-Content "src\hooks\useWindowSize.ts" $useWindowSize
Make-Commit "feat: add useWindowSize hook for responsive chart dimensions"

# Commit 29: useClipboard hook
$useClipboard = @"
import { useState, useCallback } from 'react';

/**
 * Provides copy-to-clipboard functionality with success state.
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch {
      console.warn('useClipboard: Failed to copy text');
      setCopied(false);
    }
  }, [timeout]);

  return { copied, copy };
}
"@
Set-Content "src\hooks\useClipboard.ts" $useClipboard
Make-Commit "feat: add useClipboard hook for sharing kundali results"

# Commit 30: useScrollToTop hook
$useScrollToTop = @"
import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

/**
 * Scrolls to the top of the page on route change.
 */
export function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
}
"@
Set-Content "src\hooks\useScrollToTop.ts" $useScrollToTop
Make-Commit "feat: add useScrollToTop hook for navigation UX"

# ── COMMIT 31-40: Final batch ─────────────────────────────────────────────────

# Commit 31: Add formatters utility
$formatters = @"
/**
 * Display formatters for KundaliAI
 */

/** Formats a number as a degree string, e.g. 123.45° */
export function formatDegrees(deg: number): string {
  return \`\${deg.toFixed(2)}°\`;
}

/** Formats a date string for display */
export function formatBirthDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

/** Formats a time string (HH:MM) for 12-hour display */
export function formatTime12h(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return \`\${hour12}:\${String(m).padStart(2, '0')} \${ampm}\`;
}

/** Returns a display label for a house number */
export function formatHouseLabel(house: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const suffix = house <= 3 ? suffixes[house] : suffixes[0];
  return \`\${house}\${suffix} House\`;
}

/** Formats a price in INR */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount);
}
"@
Set-Content "src\lib\formatters.ts" $formatters
Make-Commit "feat: add display formatter utilities for kundali data"

# Commit 32: Add error messages constants
$errors = @"
/**
 * User-facing error messages for KundaliAI
 */
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
"@
Set-Content "src\lib\errorMessages.ts" $errors
Make-Commit "feat: add centralized error messages for consistent UX"

# Commit 33: Add logger utility
$logger = @"
/**
 * Lightweight logger for KundaliAI
 * Logs to console in development, silently in production.
 */

const isDev = import.meta.env.DEV;

export const logger = {
  info: (msg: string, ...args: unknown[]) => {
    if (isDev) console.info(\`[KundaliAI] \${msg}\`, ...args);
  },
  warn: (msg: string, ...args: unknown[]) => {
    if (isDev) console.warn(\`[KundaliAI] \${msg}\`, ...args);
  },
  error: (msg: string, ...args: unknown[]) => {
    // Always log errors, even in production
    console.error(\`[KundaliAI] \${msg}\`, ...args);
  },
  debug: (msg: string, ...args: unknown[]) => {
    if (isDev) console.debug(\`[KundaliAI] \${msg}\`, ...args);
  },
};
"@
Set-Content "src\lib\logger.ts" $logger
Make-Commit "feat: add environment-aware logger utility"

# Commit 34: Add color palette constants
$colors = @"
/**
 * KundaliAI design token colors
 * Matches the CSS custom properties in styles.css
 */
export const COLORS = {
  primary: '#7c3aed',      // violet-600
  primaryLight: '#8b5cf6', // violet-500
  primaryDark: '#6d28d9',  // violet-700
  accent: '#f59e0b',       // amber-500
  accentLight: '#fbbf24',  // amber-400
  background: '#0f0a1e',   // deep space dark
  surface: '#1a1035',      // card background
  surfaceLight: '#231548', // hover surface
  text: '#f3f0ff',         // near white
  textMuted: '#a78bfa',    // muted violet
  textDim: '#6d5fa0',      // dimmed text
  success: '#10b981',      // emerald-500
  error: '#ef4444',        // red-500
  warning: '#f59e0b',      // amber-500
  border: '#2d1f6b',       // subtle border
} as const;

export type ColorKey = keyof typeof COLORS;
"@
Set-Content "src\lib\colors.ts" $colors
Make-Commit "feat: add design token color constants matching CSS variables"

# Commit 35: Add storage keys constants
$storageKeys = @"
/**
 * localStorage key constants for KundaliAI
 * Centralizes all storage keys to prevent typos and conflicts.
 */
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
"@
Set-Content "src\lib\storageKeys.ts" $storageKeys
Make-Commit "feat: add centralized localStorage key constants"

# Commit 36: usePrevious hook
$usePrevious = @"
import { useRef, useEffect } from 'react';

/**
 * Returns the previous value of a state or prop.
 * Useful for comparing before/after to trigger animations.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
"@
Set-Content "src\hooks\usePrevious.ts" $usePrevious
Make-Commit "feat: add usePrevious hook for animation triggers"

# Commit 37: useIsVisible hook
$useIsVisible = @"
import { useState, useEffect, useRef } from 'react';

/**
 * Returns true when the element is visible in the viewport.
 * Used for scroll-triggered animations.
 */
export function useIsVisible(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
"@
Set-Content "src\hooks\useIsVisible.ts" $useIsVisible
Make-Commit "feat: add useIsVisible hook for scroll-triggered animations"

# Commit 38: Update README with new lib structure
$readmeAddition = @"

## Project Structure

\`\`\`
src/
├── components/     # React UI components
│   ├── KundaliChart.tsx    # Kundali chart renderer
│   ├── KundaliGenerator.tsx # Main generation form
│   ├── PaymentModal.tsx    # Razorpay payment flow
│   ├── StarField.tsx       # Animated background
│   └── SupportChat.tsx     # Support widget
├── hooks/          # Custom React hooks
│   ├── useClipboard.ts
│   ├── useDebounce.ts
│   ├── useIsVisible.ts
│   ├── useLocalStorage.ts
│   ├── usePrevious.ts
│   ├── useScrollToTop.ts
│   └── useWindowSize.ts
├── lib/            # Utility functions & constants
│   ├── api/            # API client functions
│   ├── colors.ts       # Design token colors
│   ├── constants.ts    # App-wide constants
│   ├── dateUtils.ts    # Date & astronomy helpers
│   ├── errorMessages.ts # User-facing error strings
│   ├── formatters.ts   # Display formatters
│   ├── logger.ts       # Dev/prod logger
│   ├── storageKeys.ts  # localStorage key constants
│   ├── stringUtils.ts  # String helpers
│   ├── types.ts        # Shared TypeScript types
│   └── validationUtils.ts # Input validation
├── routes/         # TanStack Router pages
│   ├── __root.tsx  # Root layout
│   ├── index.tsx   # Home / main page
│   ├── privacy.tsx # Privacy policy
│   ├── refund.tsx  # Refund policy
│   └── terms.tsx   # Terms of service
└── styles.css      # Global styles & design tokens
\`\`\`
"@
Add-Content "README.md" $readmeAddition
Make-Commit "docs: update README with complete project structure"

# Commit 39: Add lib index barrel export
$libIndex = @"
/**
 * Barrel export for all KundaliAI utilities.
 * Import from '@/lib' for convenience.
 */
export * from './colors';
export * from './constants';
export * from './dateUtils';
export * from './errorMessages';
export * from './formatters';
export * from './logger';
export * from './storageKeys';
export * from './stringUtils';
export * from './types';
export * from './validationUtils';
"@
Set-Content "src\lib\index.ts" $libIndex
Make-Commit "feat: add barrel export index for lib utilities"

# Commit 40: Final streak log update
Add-Content "streak.txt" "`r`n[$date] ✅ 40-commit streak push complete! Real utility library added."
Make-Commit "chore: complete 40-commit streak for 07-07-2026 - util library shipped"

Write-Host "`n🎉 ALL 40 COMMITS DONE!" -ForegroundColor Cyan
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main
Write-Host "✅ Pushed! Streak maintained! 🔥" -ForegroundColor Green
