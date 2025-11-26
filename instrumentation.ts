import * as Sentry from '@sentry/nextjs';

/**
 * Loads and applies Sentry configuration for the active Next.js runtime.
 *
 * Conditionally imports the runtime-specific Sentry configuration when `process.env.NEXT_RUNTIME`
 * is `'nodejs'` or `'edge'`, causing the corresponding setup module to execute.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;