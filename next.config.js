/* eslint linebreak-style: ["error", "unix"] */

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://topupstore.herokuapp.com'],
  },
};

module.exports = nextConfig;
