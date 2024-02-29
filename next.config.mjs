/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Sparrow48/nasib/main/src/assets/eDok.png',
      },
    ],
  },
};

export default nextConfig;
