/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true
};

module.exports = nextConfig;
