import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "../docs",
  transpilePackages: ["common"],\
  basePath: '/dir-website'
};

export default nextConfig;
