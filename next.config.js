/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/store.html',
      },
      {
        source: '/admin',
        destination: '/admin.html',
      },
    ]
  },
}

module.exports = nextConfig
