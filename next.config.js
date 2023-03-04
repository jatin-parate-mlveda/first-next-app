/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/apps*',
        destination: '/apps*',
      },
      {
        source: '/_next*',
        destination: '/_next*'
      },
      {
        source: '/*',
        destination: 'http://45.79.140.122/*',
      }
    ]
  }
}

module.exports = nextConfig
