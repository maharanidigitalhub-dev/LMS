import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'vimeo.com' },
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
      { protocol: 'https', hostname: 'b-cdn.net' },
    ],
  },
}

export default nextConfig
