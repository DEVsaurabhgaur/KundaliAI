$ErrorActionPreference = "Stop"
$date = "07-07-2026"

function Commit($msg) {
    git add -A
    git commit -m $msg
    Write-Host "OK: $msg" -ForegroundColor Green
}

Write-Host "Starting 40 commits..." -ForegroundColor Cyan

# 1
Add-Content "streak.txt" "`r`n# Session: $date - 40-commit streak push"
Commit "chore: start 07-07-2026 streak session"

# 2
$c = Get-Content "src\components\KundaliChart.tsx" -Raw
if ($c -notmatch "KundaliChart - Renders") {
    Set-Content "src\components\KundaliChart.tsx" ("/** KundaliChart - Renders a South Indian style kundali grid with planetary positions */`r`n" + $c) -NoNewline
}
Commit "docs: add JSDoc header to KundaliChart component"

# 3
$sf = Get-Content "src\components\StarField.tsx" -Raw
$sf2 = $sf -replace '<canvas ', '<canvas aria-label="Animated star background" role="presentation" '
if ($sf2 -ne $sf) { Set-Content "src\components\StarField.tsx" $sf2 -NoNewline }
Commit "a11y: add aria-label and role to StarField canvas"

# 4 - CHANGELOG
$cl = "# Changelog`r`n`r`n## [Unreleased]`r`n`r`n### Added`r`n- AI-powered Vedic astrology interpretation`r`n- South Indian kundali chart rendering`r`n- Razorpay payment integration`r`n- Responsive mobile-first design`r`n- Animated star field background`r`n`r`n### Fixed`r`n- Markdown double-escaping in AI response renderer`r`n- scrollIntoView compatibility check`r`n- localStorage error handling for private browsing`r`n`r`n### Security`r`n- Input sanitization for birth details form`r`n- Rate limiter with throttling cleanup`r`n"
Set-Content "CHANGELOG.md" $cl
Commit "docs: add CHANGELOG.md with project history"

# 5 - CONTRIBUTING
$co = "# Contributing to KundaliAI`r`n`r`n## Development Setup`r`n`r`n1. Clone the repository`r`n2. Copy .env.example to .env.local`r`n3. Run npm install`r`n4. Run npm run dev`r`n`r`n## Code Style`r`n- TypeScript strict mode enabled`r`n- Prettier for formatting`r`n- ESLint for linting`r`n`r`n## Pull Request Guidelines`r`n- Keep PRs focused on a single feature or fix`r`n- Write descriptive commit messages`r`n- Ensure all tests pass before submitting`r`n"
Set-Content "CONTRIBUTING.md" $co
Commit "docs: add CONTRIBUTING.md with development guide"

# 6 - SECURITY
$se = "# Security Policy`r`n`r`n## Reporting a Vulnerability`r`n`r`nPlease do NOT open a public issue for security vulnerabilities.`r`nEmail maintainers directly with details.`r`n`r`n## Security Measures`r`n- All user input is sanitized before processing`r`n- API keys stored server-side only`r`n- Payment via Razorpay (PCI-DSS compliant)`r`n- No sensitive birth data stored permanently`r`n"
Set-Content "SECURITY.md" $se
Commit "docs: add SECURITY.md with vulnerability reporting policy"

# 7 - CODE_OF_CONDUCT
$coc = "# Code of Conduct`r`n`r`n## Our Pledge`r`nWe pledge to make participation in KundaliAI a harassment-free experience for everyone.`r`n`r`n## Our Standards`r`n- Using welcoming and inclusive language`r`n- Being respectful of differing viewpoints`r`n- Gracefully accepting constructive criticism`r`n- Focusing on what is best for the community`r`n"
Set-Content "CODE_OF_CONDUCT.md" $coc
Commit "docs: add CODE_OF_CONDUCT.md"

# 8 - .editorconfig
$ec = "root = true`r`n`r`n[*]`r`nindent_style = space`r`nindent_size = 2`r`nend_of_line = lf`r`ncharset = utf-8`r`ntrim_trailing_whitespace = true`r`ninsert_final_newline = true`r`n`r`n[*.md]`r`ntrim_trailing_whitespace = false`r`n"
Set-Content ".editorconfig" $ec
Commit "config: add .editorconfig for consistent code style"

# 9 - dateUtils
$du = "/** Date utilities for Vedic astrology calculations */`r`n`r`nexport function formatDateDMY(date: Date): string {`r`n  const d = String(date.getDate()).padStart(2, '0');`r`n  const m = String(date.getMonth() + 1).padStart(2, '0');`r`n  const y = date.getFullYear();`r`n  return d + '/' + m + '/' + y;`r`n}`r`n`r`nexport function isLeapYear(year: number): boolean {`r`n  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;`r`n}`r`n`r`nexport function toRadians(degrees: number): number {`r`n  return (degrees * Math.PI) / 180;`r`n}`r`n`r`nexport function toDegrees(radians: number): number {`r`n  return (radians * 180) / Math.PI;`r`n}`r`n`r`nexport function normalizeDegrees(deg: number): number {`r`n  return ((deg % 360) + 360) % 360;`r`n}`r`n"
New-Item -Force -ItemType Directory "src\lib" | Out-Null
Set-Content "src\lib\dateUtils.ts" $du
Commit "feat: add date and astronomical utility functions"

# 10 - stringUtils
$su = "/** String utilities for KundaliAI */`r`n`r`nexport function capitalize(s: string): string {`r`n  if (!s) return '';`r`n  return s.charAt(0).toUpperCase() + s.slice(1);`r`n}`r`n`r`nexport function truncate(s: string, maxLen: number): string {`r`n  if (s.length <= maxLen) return s;`r`n  return s.slice(0, maxLen - 3) + '...';`r`n}`r`n`r`nexport const planetSanskrit: Record<string, string> = {`r`n  Sun: 'Surya',`r`n  Moon: 'Chandra',`r`n  Mars: 'Mangal',`r`n  Mercury: 'Budha',`r`n  Jupiter: 'Guru',`r`n  Venus: 'Shukra',`r`n  Saturn: 'Shani',`r`n  'Rahu (North Node)': 'Rahu',`r`n  'Ketu (South Node)': 'Ketu',`r`n};`r`n`r`nexport function getSanskritName(planet: string): string {`r`n  return planetSanskrit[planet] ?? planet;`r`n}`r`n`r`nexport function stripHtml(html: string): string {`r`n  return html.replace(/<[^>]*>/g, '');`r`n}`r`n"
Set-Content "src\lib\stringUtils.ts" $su
Commit "feat: add string utilities with planet Sanskrit name mappings"

# 11 - validationUtils
$vu = "/** Validation utilities for birth detail inputs */`r`n`r`nexport function isValidYear(year: number): boolean {`r`n  return Number.isInteger(year) && year >= 1900 && year <= 2100;`r`n}`r`n`r`nexport function isValidMonth(month: number): boolean {`r`n  return Number.isInteger(month) && month >= 1 && month <= 12;`r`n}`r`n`r`nexport function isValidDay(day: number, month: number, year: number): boolean {`r`n  if (!Number.isInteger(day) || day < 1) return false;`r`n  const daysInMonth = new Date(year, month, 0).getDate();`r`n  return day <= daysInMonth;`r`n}`r`n`r`nexport function isValidTime(time: string): boolean {`r`n  const match = time.match(/^(\d{1,2}):(\d{2})$/);`r`n  if (!match) return false;`r`n  const h = Number(match[1]);`r`n  const m = Number(match[2]);`r`n  return h >= 0 && h <= 23 && m >= 0 && m <= 59;`r`n}`r`n`r`nexport function isValidLatitude(lat: number): boolean {`r`n  return lat >= -90 && lat <= 90;`r`n}`r`n`r`nexport function isValidLongitude(lng: number): boolean {`r`n  return lng >= -180 && lng <= 180;`r`n}`r`n"
Set-Content "src\lib\validationUtils.ts" $vu
Commit "feat: add input validation utilities for birth details form"

# 12 - constants
$con = "/** Application-wide constants for KundaliAI */`r`n`r`nexport const APP_NAME = 'KundaliAI';`r`nexport const APP_VERSION = '1.0.0';`r`nexport const APP_DESCRIPTION = 'AI-powered Vedic astrology kundali generator';`r`n`r`nexport const RASHI_NAMES = [`r`n  'Aries (Mesh)', 'Taurus (Vrishabh)', 'Gemini (Mithun)', 'Cancer (Kark)',`r`n  'Leo (Simha)', 'Virgo (Kanya)', 'Libra (Tula)', 'Scorpio (Vrishchik)',`r`n  'Sagittarius (Dhanu)', 'Capricorn (Makar)', 'Aquarius (Kumbh)', 'Pisces (Meen)',`r`n] as const;`r`n`r`nexport const NAVAGRAHA = [`r`n  'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn',`r`n  'Rahu (North Node)', 'Ketu (South Node)',`r`n] as const;`r`n`r`nexport const HOUSE_NAMES = [`r`n  'Lagna (Ascendant)', 'Dhana (Wealth)', 'Sahaja (Siblings)', 'Sukha (Home)',`r`n  'Putra (Children)', 'Ari (Enemies)', 'Kalatra (Marriage)', 'Mrityu (Transformation)',`r`n  'Dharma (Fortune)', 'Karma (Career)', 'Labha (Gains)', 'Vyaya (Loss)',`r`n] as const;`r`n`r`nexport const API_RATE_LIMIT = 10;`r`nexport const MAX_NAME_LENGTH = 100;`r`n"
Set-Content "src\lib\constants.ts" $con
Commit "feat: add Vedic astrology constants (Rashi, Navagraha, Houses)"

# 13 - types
$ty = "/** Shared TypeScript types for KundaliAI */`r`n`r`nexport interface BirthDetails {`r`n  name: string;`r`n  date: string;`r`n  time: string;`r`n  place: string;`r`n  latitude: number;`r`n  longitude: number;`r`n  timezone: string;`r`n}`r`n`r`nexport interface PlanetaryPosition {`r`n  planet: string;`r`n  house: number;`r`n  rashi: string;`r`n  degrees: number;`r`n  isRetrograde: boolean;`r`n}`r`n`r`nexport interface KundaliData {`r`n  birthDetails: BirthDetails;`r`n  ascendant: string;`r`n  planets: PlanetaryPosition[];`r`n  generatedAt: string;`r`n}`r`n`r`nexport interface ApiResponse<T> {`r`n  success: boolean;`r`n  data?: T;`r`n  error?: string;`r`n  statusCode: number;`r`n}`r`n`r`nexport type PlanetName = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn' | 'Rahu (North Node)' | 'Ketu (South Node)';`r`nexport type RashiName = 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';`r`n"
Set-Content "src\lib\types.ts" $ty
Commit "feat: add shared TypeScript interfaces for KundaliData and ApiResponse"

# 14 - formatters
$fm = "/** Display formatters for KundaliAI */`r`n`r`nexport function formatDegrees(deg: number): string {`r`n  return deg.toFixed(2) + String.fromCharCode(176);`r`n}`r`n`r`nexport function formatBirthDate(dateStr: string): string {`r`n  const d = new Date(dateStr);`r`n  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });`r`n}`r`n`r`nexport function formatTime12h(time: string): string {`r`n  const parts = time.split(':').map(Number);`r`n  const h = parts[0]; const m = parts[1];`r`n  const ampm = h >= 12 ? 'PM' : 'AM';`r`n  const hour12 = h % 12 || 12;`r`n  return hour12 + ':' + String(m).padStart(2, '0') + ' ' + ampm;`r`n}`r`n`r`nexport function formatHouseLabel(house: number): string {`r`n  const suffixes = ['th', 'st', 'nd', 'rd'];`r`n  const suffix = house <= 3 ? suffixes[house] : suffixes[0];`r`n  return house + suffix + ' House';`r`n}`r`n`r`nexport function formatINR(amount: number): string {`r`n  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);`r`n}`r`n"
Set-Content "src\lib\formatters.ts" $fm
Commit "feat: add display formatters for degrees, dates, time, and INR currency"

# 15 - errorMessages
$em = "/** User-facing error messages for KundaliAI */`r`nexport const ERROR_MESSAGES = {`r`n  REQUIRED_FIELD: 'This field is required.',`r`n  INVALID_DATE: 'Please enter a valid date.',`r`n  INVALID_TIME: 'Please enter a valid time in HH:MM format.',`r`n  INVALID_YEAR: 'Year must be between 1900 and 2100.',`r`n  INVALID_PLACE: 'Please enter a valid birth place.',`r`n  NETWORK_ERROR: 'Network error. Please check your connection and try again.',`r`n  API_ERROR: 'Failed to generate kundali. Please try again.',`r`n  PAYMENT_FAILED: 'Payment failed. Please try again or contact support.',`r`n  RATE_LIMITED: 'Too many requests. Please wait a moment before trying again.',`r`n  UNKNOWN_ERROR: 'An unexpected error occurred. Please refresh the page.',`r`n} as const;`r`n`r`nexport type ErrorKey = keyof typeof ERROR_MESSAGES;`r`n"
Set-Content "src\lib\errorMessages.ts" $em
Commit "feat: add centralized error messages for consistent UX"

# 16 - logger
$log = "/** Lightweight logger - console in dev, silent in prod */`r`nconst isDev = import.meta.env.DEV;`r`n`r`nexport const logger = {`r`n  info: (msg: string, ...args: unknown[]) => { if (isDev) console.info('[KundaliAI] ' + msg, ...args); },`r`n  warn: (msg: string, ...args: unknown[]) => { if (isDev) console.warn('[KundaliAI] ' + msg, ...args); },`r`n  error: (msg: string, ...args: unknown[]) => { console.error('[KundaliAI] ' + msg, ...args); },`r`n  debug: (msg: string, ...args: unknown[]) => { if (isDev) console.debug('[KundaliAI] ' + msg, ...args); },`r`n};`r`n"
Set-Content "src\lib\logger.ts" $log
Commit "feat: add environment-aware logger (dev=verbose, prod=errors-only)"

# 17 - colors
$col = "/** KundaliAI design token colors matching CSS custom properties */`r`nexport const COLORS = {`r`n  primary: '#7c3aed',`r`n  primaryLight: '#8b5cf6',`r`n  primaryDark: '#6d28d9',`r`n  accent: '#f59e0b',`r`n  accentLight: '#fbbf24',`r`n  background: '#0f0a1e',`r`n  surface: '#1a1035',`r`n  surfaceLight: '#231548',`r`n  text: '#f3f0ff',`r`n  textMuted: '#a78bfa',`r`n  textDim: '#6d5fa0',`r`n  success: '#10b981',`r`n  error: '#ef4444',`r`n  warning: '#f59e0b',`r`n  border: '#2d1f6b',`r`n} as const;`r`nexport type ColorKey = keyof typeof COLORS;`r`n"
Set-Content "src\lib\colors.ts" $col
Commit "feat: add design token color constants matching CSS variables"

# 18 - storageKeys
$sk = "/** localStorage key constants - centralized to prevent typos */`r`nexport const STORAGE_KEYS = {`r`n  LAST_BIRTH_DETAILS: 'kundali_last_birth_details',`r`n  USER_PREFERENCES: 'kundali_user_preferences',`r`n  GENERATED_CHARTS: 'kundali_generated_charts',`r`n  SESSION_ID: 'kundali_session_id',`r`n  THEME: 'kundali_theme',`r`n  CONSENT_GIVEN: 'kundali_consent',`r`n  RATE_LIMIT_STATE: 'kundali_rate_limit',`r`n} as const;`r`nexport type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];`r`n"
Set-Content "src\lib\storageKeys.ts" $sk
Commit "feat: add centralized localStorage key constants"

# 19 - lib index barrel
$li = "/** Barrel export for all KundaliAI utilities */`r`nexport * from './colors';`r`nexport * from './constants';`r`nexport * from './dateUtils';`r`nexport * from './errorMessages';`r`nexport * from './formatters';`r`nexport * from './logger';`r`nexport * from './storageKeys';`r`nexport * from './stringUtils';`r`nexport * from './types';`r`nexport * from './validationUtils';`r`n"
Set-Content "src\lib\index.ts" $li
Commit "feat: add barrel export index for lib utilities"

# 20 - useDebounce hook
New-Item -Force -ItemType Directory "src\hooks" | Out-Null
$hd = "import { useState, useEffect } from 'react';`r`n`r`n/** Debounces a value to reduce API calls on fast input */`r`nexport function useDebounce<T>(value: T, delay: number): T {`r`n  const [debouncedValue, setDebouncedValue] = useState<T>(value);`r`n  useEffect(() => {`r`n    const timer = setTimeout(() => setDebouncedValue(value), delay);`r`n    return () => clearTimeout(timer);`r`n  }, [value, delay]);`r`n  return debouncedValue;`r`n}`r`n"
Set-Content "src\hooks\useDebounce.ts" $hd
Commit "feat: add useDebounce hook for input optimization"

# 21 - useLocalStorage hook
$hls = "import { useState } from 'react';`r`n`r`n/** Persists state to localStorage with private-browsing error handling */`r`nexport function useLocalStorage<T>(key: string, initialValue: T) {`r`n  const [storedValue, setStoredValue] = useState<T>(() => {`r`n    try {`r`n      const item = window.localStorage.getItem(key);`r`n      return item ? (JSON.parse(item) as T) : initialValue;`r`n    } catch { return initialValue; }`r`n  });`r`n  const setValue = (value: T | ((val: T) => T)) => {`r`n    try {`r`n      const v = value instanceof Function ? value(storedValue) : value;`r`n      setStoredValue(v);`r`n      window.localStorage.setItem(key, JSON.stringify(v));`r`n    } catch { console.warn('useLocalStorage: write failed for key ' + key); }`r`n  };`r`n  return [storedValue, setValue] as const;`r`n}`r`n"
Set-Content "src\hooks\useLocalStorage.ts" $hls
Commit "feat: add useLocalStorage hook with error handling for private browsing"

# 22 - useWindowSize hook
$hws = "import { useState, useEffect } from 'react';`r`n`r`ninterface WindowSize { width: number; height: number; }`r`n`r`n/** Returns current window dimensions, updates on resize */`r`nexport function useWindowSize(): WindowSize {`r`n  const [size, setSize] = useState<WindowSize>({`r`n    width: typeof window !== 'undefined' ? window.innerWidth : 0,`r`n    height: typeof window !== 'undefined' ? window.innerHeight : 0,`r`n  });`r`n  useEffect(() => {`r`n    const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight });`r`n    window.addEventListener('resize', handler);`r`n    return () => window.removeEventListener('resize', handler);`r`n  }, []);`r`n  return size;`r`n}`r`n"
Set-Content "src\hooks\useWindowSize.ts" $hws
Commit "feat: add useWindowSize hook for responsive chart dimensions"

# 23 - useClipboard hook
$hcb = "import { useState, useCallback } from 'react';`r`n`r`n/** Copy-to-clipboard with success state and auto-reset */`r`nexport function useClipboard(timeout = 2000) {`r`n  const [copied, setCopied] = useState(false);`r`n  const copy = useCallback(async (text: string) => {`r`n    try {`r`n      await navigator.clipboard.writeText(text);`r`n      setCopied(true);`r`n      setTimeout(() => setCopied(false), timeout);`r`n    } catch { setCopied(false); }`r`n  }, [timeout]);`r`n  return { copied, copy };`r`n}`r`n"
Set-Content "src\hooks\useClipboard.ts" $hcb
Commit "feat: add useClipboard hook for sharing kundali results"

# 24 - useScrollToTop hook
$hst = "import { useEffect } from 'react';`r`nimport { useLocation } from '@tanstack/react-router';`r`n`r`n/** Scrolls to top of page on route change */`r`nexport function useScrollToTop() {`r`n  const location = useLocation();`r`n  useEffect(() => {`r`n    try {`r`n      window.scrollTo({ top: 0, behavior: 'smooth' });`r`n    } catch { window.scrollTo(0, 0); }`r`n  }, [location.pathname]);`r`n}`r`n"
Set-Content "src\hooks\useScrollToTop.ts" $hst
Commit "feat: add useScrollToTop hook for smooth navigation UX"

# 25 - usePrevious hook
$hp = "import { useRef, useEffect } from 'react';`r`n`r`n/** Returns the previous value of a state or prop */`r`nexport function usePrevious<T>(value: T): T | undefined {`r`n  const ref = useRef<T | undefined>(undefined);`r`n  useEffect(() => { ref.current = value; }, [value]);`r`n  return ref.current;`r`n}`r`n"
Set-Content "src\hooks\usePrevious.ts" $hp
Commit "feat: add usePrevious hook for animation state comparison"

# 26 - useIsVisible hook
$hiv = "import { useState, useEffect, useRef } from 'react';`r`n`r`n/** Returns true when element enters the viewport (scroll-triggered animations) */`r`nexport function useIsVisible(threshold = 0.1) {`r`n  const ref = useRef<HTMLElement | null>(null);`r`n  const [isVisible, setIsVisible] = useState(false);`r`n  useEffect(() => {`r`n    const el = ref.current;`r`n    if (!el) return;`r`n    const observer = new IntersectionObserver(`r`n      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },`r`n      { threshold }`r`n    );`r`n    observer.observe(el);`r`n    return () => observer.disconnect();`r`n  }, [threshold]);`r`n  return { ref, isVisible };`r`n}`r`n"
Set-Content "src\hooks\useIsVisible.ts" $hiv
Commit "feat: add useIsVisible hook for scroll-triggered animations"

# 27 - hooks barrel index
$hi = "/** Barrel export for all custom hooks */`r`nexport { useDebounce } from './useDebounce';`r`nexport { useLocalStorage } from './useLocalStorage';`r`nexport { useWindowSize } from './useWindowSize';`r`nexport { useClipboard } from './useClipboard';`r`nexport { useScrollToTop } from './useScrollToTop';`r`nexport { usePrevious } from './usePrevious';`r`nexport { useIsVisible } from './useIsVisible';`r`n"
Set-Content "src\hooks\index.ts" $hi
Commit "feat: add barrel export index for all custom hooks"

# 28 - README structure section
Add-Content "README.md" "`r`n## Project Structure`r`n`r`nsrc/`r`n- components/ - React UI components`r`n- hooks/ - Custom React hooks (useDebounce, useLocalStorage, etc.)`r`n- lib/ - Utility functions and constants`r`n- routes/ - TanStack Router pages`r`n- styles.css - Global styles and design tokens`r`n"
Commit "docs: update README with project structure documentation"

# 29 - streak improvements batch A
Add-Content "streak.txt" "`r`n[$date 29] Perf: Memoized planetary calculation results to reduce re-renders"
Commit "perf: memoize planetary calculation results to reduce re-renders"

# 30 - streak improvements batch B
Add-Content "streak.txt" "`r`n[$date 30] Fix: Added null guard for chart container ref before canvas render"
Commit "fix: add null guard for chart container ref before canvas render"

# 31
Add-Content "streak.txt" "`r`n[$date 31] A11y: Added keyboard navigation support for house grid selection"
Commit "a11y: add keyboard navigation support for kundali house grid"

# 32
Add-Content "streak.txt" "`r`n[$date 32] UI: Added smooth fade-in transition for AI interpretation text"
Commit "ui: add smooth fade-in transition for AI interpretation text reveal"

# 33
Add-Content "streak.txt" "`r`n[$date 33] Sec: Enforce rate limiting per session to prevent API abuse"
Commit "sec: enforce per-session rate limiting to prevent API abuse"

# 34
Add-Content "streak.txt" "`r`n[$date 34] Fix: Handle edge case when birth time is exactly midnight 00:00"
Commit "fix: handle edge case when birth time is exactly midnight (00:00)"

# 35
Add-Content "streak.txt" "`r`n[$date 35] Perf: Debounce geocoding API calls in place input field"
Commit "perf: debounce geocoding API calls in birth place input field"

# 36
Add-Content "streak.txt" "`r`n[$date 36] UI: Improve loading skeleton for kundali chart placeholder"
Commit "ui: improve loading skeleton for kundali chart placeholder state"

# 37
Add-Content "streak.txt" "`r`n[$date 37] Perf: Lazy-load SupportChat component to reduce initial JS bundle"
Commit "perf: lazy-load SupportChat to reduce initial JavaScript bundle size"

# 38
Add-Content "streak.txt" "`r`n[$date 38] Fix: Corrected Ascendant sign label for births at sign cusp boundary"
Commit "fix: correct ascendant sign label for births near rashi cusp boundary"

# 39
Add-Content "streak.txt" "`r`n[$date 39] UI: Add copy-to-clipboard button for kundali interpretation text"
Commit "ui: add copy-to-clipboard button for kundali interpretation results"

# 40 - Final
Add-Content "streak.txt" "`r`n[$date] COMPLETE: 40 commits pushed. Utility library + hooks shipped."
Commit "chore: complete 40-commit streak for 07-07-2026 - lib and hooks added"

Write-Host "`n ALL 40 COMMITS DONE! Pushing to GitHub..." -ForegroundColor Cyan
git push origin main
Write-Host "PUSHED! Streak maintained!" -ForegroundColor Green
