/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Vikramaditya-Portfolio',
  assetPrefix: '/Vikramaditya-Portfolio/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bikramaditya-mandal.github.io',
      },
    ],
  },
}

module.exports = nextConfig
