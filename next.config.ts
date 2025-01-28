import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Игнорировать некритические ошибки ESLint при сборке
    ignoreDuringBuilds: true,
  },
  /* другие опции */
};

export default nextConfig;
