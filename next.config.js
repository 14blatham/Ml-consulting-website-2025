/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['mlc-srvr1'],
    remotePatterns: [
      {
        protocol: 'file',
        hostname: 'mlc-srvr1',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;