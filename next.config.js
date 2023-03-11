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
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/wp-content/:path*",
          destination: "http://45.79.140.122/wp-content/:path*",
        },
        {
          source: "/(!apps)?wp-content/:path*/",
          destination: "http://45.79.140.122/wp-content/:path*/",
        },
        {
          source: "/superadmin/:path*",
          destination: "http://45.79.140.122/superadmin/:path*",
        },
        {
          source: "/(!apps)?superadmin/:path*/",
          destination: "http://45.79.140.122/superadmin/:path*/",
        },
      ],
      afterFiles: [
        // {
        //   source: "/_next/:path*",
        //   destination: "/_next/:path*",
        // },
        // {
        //   source: "/apps/",
        //   destination: "/apps/",
        // },
        // {
        //   source: "/apps/:path*",
        //   destination: "/apps/:path*",
        // },
        {
          source: "/(!apps)?wp-content/:path/",
          destination: "http://45.79.140.122/wp-content/:path/",
        },
        {
          source: "/(!apps)?superadmin/:path/",
          destination: "http://45.79.140.122/superadmin/:path/",
        },
        {
          source: "/(!apps)?:path*/",
          destination: "http://45.79.140.122/:path*/",
        },
        // {
        //   source: '/:path/',
        //   destination: "http://45.79.140.122/:path/",
        // },
        {
          source: "/:path/",
          destination: "http://45.79.140.122/:path/",
        },
      ],
      // afterFiles: [
      //   // {
      //   //   source: "/(!apps)?:path*",
      //   //   destination: "http://45.79.140.122/:path*",
      //   // },
      //   {
      //     source: "/:path*",
      //     destination: "http://45.79.140.122/:path*",
      //   },
      // ],
    };
  },
};

module.exports = nextConfig;
