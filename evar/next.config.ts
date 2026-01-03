import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "../docs",
  transpilePackages: ["common"],
  basePath: '/dir-website',
  assetPrefix: '/dir-website/',
  images: {
    unoptimized: true, // GitHub Pages hat keine Image-Optimization-API
  },
};

export default nextConfig;
