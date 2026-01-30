/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
};

module.exports = nextConfig;

