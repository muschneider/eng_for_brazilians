import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Everything is static + client-side. No server runtime, no DB, no env vars.
  // This keeps the app comfortably inside the Vercel Hobby (free) plan.
  poweredByHeader: false,
};

export default nextConfig;
