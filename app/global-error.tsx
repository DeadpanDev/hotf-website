"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

/**
 * Reports the provided error to Sentry and renders the default Next.js error page.
 *
 * This component captures the `error` with Sentry as a side effect and returns
 * a generic error page using Next.js' default error component.
 *
 * @param error - The error to report and display. May include an optional `digest` property.
 * @returns A React element that renders a generic Next.js error page.
 */
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}