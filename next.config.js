/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/_next/:path*",
        destination: "/_next/:path*",
      },
      {
        source: "/apps/",
        destination: "/apps/",
      },
      {
        source: "/apps/:path*",
        destination: "/apps/:path*",
      },
      {
        source: "/:path*",
        destination: "http://45.79.140.122/:path*",
      },
    ];
  },
};

module.exports = nextConfig;