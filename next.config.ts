import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/ko", permanent: true },
      { source: "/about", destination: "/ko/about", permanent: true },
      { source: "/methodology", destination: "/ko/methodology", permanent: true },
      { source: "/contact", destination: "/ko/contact", permanent: true },
      { source: "/privacy", destination: "/ko/privacy", permanent: true },
      { source: "/terms", destination: "/ko/terms", permanent: true },
      { source: "/text-my-ex", destination: "/ko/text-my-ex", permanent: true },
      { source: "/quit-my-job", destination: "/ko/quit-my-job", permanent: true },
      { source: "/break-up", destination: "/ko/break-up", permanent: true },
      { source: "/move", destination: "/ko/move", permanent: true },
      { source: "/throw-away", destination: "/ko/throw-away", permanent: true },
      { source: "/small-choices", destination: "/ko/small-choices", permanent: true },
    ];
  },
};

export default nextConfig;
