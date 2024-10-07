import { withSentryConfig } from '@sentry/nextjs';
import { withSitemap } from 'next-sitemap';

/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: 'https://www.craftlyweb.com',
  generateRobotsTxt: true, // Generates robots.txt file
};

// Combine the sitemap and Sentry configurations
const combinedConfig = withSitemap(nextConfig);

export default withSentryConfig(combinedConfig, {
  silent: true,
  org: "javascript-mastery",
  project: "javascript-nextjs",
}, {
  widenClientFileUpload: true,
  productionBrowserSourceMaps: false, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  minify: false, // Disable minification
  transpileClientSDK: true,
  hideSourceMaps: true,
  automaticVercelMonitors: true,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});
