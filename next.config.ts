import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // تعطيل ESLint أثناء البناء
  },
};

export default nextConfig;
