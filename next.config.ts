import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/produce",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
