import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {

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

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

automaticVercelMonitors: true,
});