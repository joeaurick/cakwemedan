/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Opsional: penting untuk export agar URL folder benar
}

module.exports = nextConfig
