import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  compress: true
};

export default nextConfig;
