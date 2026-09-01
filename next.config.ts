import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Jishnu_Janardanan_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
