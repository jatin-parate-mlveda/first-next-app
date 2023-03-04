/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return {
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
          source: "/(!apps)?:path*/",
          destination: "http://45.79.140.122/:path*/",
        },
        // {
        //   source: '/:path/',
        //   destination: "http://45.79.140.122/:path/",
        // },
        {
          source: '/:path/',
          destination: "http://45.79.140.122/:path/",
        }
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
