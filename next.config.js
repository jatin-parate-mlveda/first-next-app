/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // beforeFiles: [
      //   {
      //     source: "/_next/:path*",
      //     destination: "/_next/:path*",
      //   },
      //   {
      //     source: "/apps/",
      //     destination: "/apps/",
      //   },
      //   {
      //     source: "/apps/:path*",
      //     destination: "/apps/",
      //   },
      //   // {
      //   //   source: "/:path*",
      //   //   destination: "/api/proxy/",
      //   // },
      // ],
      afterFiles: [
        {
          source: "/:path*",
          destination: "/api/proxy/",
        },
      ]
    };
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "/api/proxy/:path*",
  //     },
  //   ];
  // },
  // async serverRuntimeConfig() {
  //   return {};
  // },
};

module.exports = nextConfig;
