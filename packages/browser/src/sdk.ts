import { createAndBind } from '@sentry/core';
import { getCurrentClient } from '@sentry/shim';
import { BrowserOptions } from './backend';
import { BrowserFrontend } from './frontend';

/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link create} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 * import { create } from '@sentry/browser';
 *
 * create({
 *   dsn: '__DSN__',
 *   // ...
 * });
 *
 * @example
 * import { setContext } from '@sentry/browser';
 * setContext({
 *   extra: { battery: 0.7 },
 *   tags: { user_mode: 'admin' },
 *   user: { id: '4711' },
 * });
 *
 * @example
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 *
 * @example
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 *
 * @see BrowserOptions for documentation on configuration options.
 */
export function create(options: BrowserOptions): void {
  createAndBind(BrowserFrontend, options);
}

/** Returns the current BrowserFrontend, if any. */
export function getCurrentFrontend(): BrowserFrontend {
  return getCurrentClient() as BrowserFrontend;
}