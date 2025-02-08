import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/CV", // Cambia esto al nombre de tu repositorio (en este caso "CV")
  assetPrefix: "/CV/",
};

export default nextConfig;
