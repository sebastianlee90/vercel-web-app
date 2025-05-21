/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/vercel-web-app",
  assetPrefix: "/vercel-web-app/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
