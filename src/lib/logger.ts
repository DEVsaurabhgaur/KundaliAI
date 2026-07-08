/** Lightweight logger for KundaliAI (no-op in production) */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDev = import.meta.env?.DEV ?? false;

function formatMessage(level: LogLevel, tag: string, message: string): string {
  const ts = new Date().toISOString().slice(11, 23);
  return `[${ts}] [${level.toUpperCase()}] [${tag}] ${message}`;
}

export const logger = {
  debug(tag: string, message: string, ...args: unknown[]): void {
    if (isDev) console.debug(formatMessage('debug', tag, message), ...args);
  },
  info(tag: string, message: string, ...args: unknown[]): void {
    if (isDev) console.info(formatMessage('info', tag, message), ...args);
  },
  warn(tag: string, message: string, ...args: unknown[]): void {
    console.warn(formatMessage('warn', tag, message), ...args);
  },
  error(tag: string, message: string, ...args: unknown[]): void {
    console.error(formatMessage('error', tag, message), ...args);
  },
};

export default logger;
