/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**", // optional but good practice
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/files/**", // ✅ Add this
      },
    ],
  },
};

export default nextConfig;
