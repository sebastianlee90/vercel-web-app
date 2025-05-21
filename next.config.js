/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/vercel-web-app",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
