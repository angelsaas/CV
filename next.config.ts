import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Permite exportar la app como un sitio estático
  images: {
    unoptimized: true, // Necesario porque GitHub Pages no soporta la optimización de imágenes de Next.js
  },
  basePath: "/cv_angel", // Ajusta según el nombre de tu repositorio
  assetPrefix: "/cv_angel/",
};

export default nextConfig;
