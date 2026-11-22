import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages publishes this project under /Callyrose/.
  output: "export",
  basePath: "/Callyrose",
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true }
};

export default nextConfig;
