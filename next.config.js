/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bikramaditya-mandal.github.io',
      },
    ],
  },
}

module.exports = nextConfig
