/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        // pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        // pathname: "/dms/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
