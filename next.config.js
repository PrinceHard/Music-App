/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**'
      },
      {
        protocol: 'https',
        hostname: 'charts-images.scdn.co',
        port: '',
        pathname: '/assets/**'
      }
    ]
  }
}