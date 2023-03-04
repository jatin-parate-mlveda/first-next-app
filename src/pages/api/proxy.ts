import { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from "next-http-proxy-middleware";

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(8, req.url);
  return httpProxyMiddleware(req, res, {
    target: "http://theshopdigest.com",
    followRedirects: true,
    // changeOrigin: false,
    pathRewrite: [{
      patternStr: '^/api/proxy',
      replaceStr: ''
    }],
    // pathRewrite: (path, req) => {
    //   return path.replace(/^\/api\/proxy/, "");
    // },
  })
}
