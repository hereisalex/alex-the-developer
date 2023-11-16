// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['@fullcalendar/core']);

module.exports = withPlugins([withImages, withTM], {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alex-the-developer.web.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.alexthedeveloper.com',
        pathname:'/**',
      },
      {
        protocol: 'https',
        hostname: 'alexthedeveloper.com',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone', // required for firebase hosting
});