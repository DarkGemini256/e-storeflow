import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://9249fab4b85a767d37d8ffbd0a5effb0@o4509538741583872.ingest.us.sentry.io/4509540805640192",
  sendDefaultPii: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  tracesSampleRate: 1.0,
});

// For tracing router transitions (if you enable tracing)
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
