/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { remotePatterns: [{ protocol: 'https', hostname: '72dev-btp.com' }] },
}
module.exports = nextConfig
