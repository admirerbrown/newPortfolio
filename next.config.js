/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/newPortfolio',
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: false,
  },
};

module.exports = nextConfig;