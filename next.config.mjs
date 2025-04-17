/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
