/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',

        pathname: '/avatar/**'
      },
      {
        protocol: 'https',
        hostname: 'www.shopdigest.com',
        port: '',
        pathname: '/wp-content/**'
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/wp-content/:path*",
          destination: "http://45.79.140.122/wp-content/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
