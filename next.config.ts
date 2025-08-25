/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["framer-motion"],
  images: {
    domains: ["res.cloudinary.com", "asset.cloudinary.com"],
  },
};

export default nextConfig;
