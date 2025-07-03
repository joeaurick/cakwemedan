/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false, // jangan pakai true kalau tidak export statis
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
