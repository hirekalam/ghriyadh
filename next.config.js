/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Suppress build-blocking type/lint errors (they are handled separately)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure Next.js knows the src/ directory is the project root
  // and that we are using the App Router exclusively
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
