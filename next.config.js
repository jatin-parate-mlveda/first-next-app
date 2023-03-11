/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.shopdigest.com',
        port: '',
        pathname: '/wp-content/**'
      }
    ]
  },
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/wp-content/:path*",
  //         destination: "http://45.79.140.122/wp-content/:path*",
  //       },
  //       {
  //         source: "/superadmin/:path*",
  //         destination: "http://45.79.140.122/superadmin/:path*",
  //       },
  //     ],
  //   };
  // },
};

module.exports = nextConfig;
