/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Machine-Learning-in-Quantum-Dynamics',
  assetPrefix: '/Machine-Learning-in-Quantum-Dynamics/',
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
