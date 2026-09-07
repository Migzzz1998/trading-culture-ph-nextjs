/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.0.185", "localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.kvbplus.com",
      },
    ],
  },
};

export default nextConfig;
