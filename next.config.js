/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/stackblitz/stackblitz-icons/**',
      },
    ],
  },
};

module.exports = nextConfig;