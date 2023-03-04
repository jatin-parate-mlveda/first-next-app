/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://45.79.140.122/:path*",
      },
    ];
  },
};

module.exports = nextConfig;