import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ko", destination: "/", permanent: true },
      { source: "/ko/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
