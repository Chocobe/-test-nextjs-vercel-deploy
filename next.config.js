/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    },
    async rewrites() {
        return [
            {
                source: '/labelr-console-v2/api/:path*/',
                destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/:path*/`,
            },
        ];
    },
};

module.exports = nextConfig;
