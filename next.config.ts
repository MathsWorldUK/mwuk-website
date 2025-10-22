import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  images: {
    remotePatterns: [new URL('https://www.datocms-assets.com/**')],
  },
};

export default nextConfig;
