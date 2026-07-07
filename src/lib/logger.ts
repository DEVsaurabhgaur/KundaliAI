/** Lightweight logger - console in dev, silent in prod */
const isDev = import.meta.env.DEV;

export const logger = {
  info: (msg: string, ...args: unknown[]) => { if (isDev) console.info('[KundaliAI] ' + msg, ...args); },
  warn: (msg: string, ...args: unknown[]) => { if (isDev) console.warn('[KundaliAI] ' + msg, ...args); },
  error: (msg: string, ...args: unknown[]) => { console.error('[KundaliAI] ' + msg, ...args); },
  debug: (msg: string, ...args: unknown[]) => { if (isDev) console.debug('[KundaliAI] ' + msg, ...args); },
};

