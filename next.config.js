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
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/:path*`,
            },
        ];
    },
};

module.exports = nextConfig;
