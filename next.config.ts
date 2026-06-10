import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted anywhere (Vercel, GitHub Pages, Netlify, S3...).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
