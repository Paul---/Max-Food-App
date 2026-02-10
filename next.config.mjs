/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode in development
  reactStrictMode: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  swcMinify: true,
};

export default nextConfig;
