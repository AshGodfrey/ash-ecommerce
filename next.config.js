/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.ctfassets.net', 'cdn.shopify.com'],
  },
};
