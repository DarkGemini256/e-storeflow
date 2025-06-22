const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withSentryConfig(nextConfig, {
  org: "shamar-innovations",
  project: "e-storeflow",
  silent: !process.env.CI,
  disableLogger: true,
});
