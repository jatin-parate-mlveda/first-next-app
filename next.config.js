const { createProxyMiddleware } = require("http-proxy-middleware");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://45.79.140.122/:path*",
        // middleware: createProxyMiddleware({
        //   target: "http://45.79.140.122",
        //   changeOrigin: false,
        // }),
      },
    ];
  },
};

module.exports = nextConfig;
