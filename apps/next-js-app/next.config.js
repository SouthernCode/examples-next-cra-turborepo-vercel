const CRA_APP_BASE_URL = process.env.CRA_APP_BASE_URL || "http://localhost:3002";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["ui"],
    images: {
        domains: ["res.cloudinary.com", "localhost"],
    },
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: '/blog/:slug*',
                    destination: '/blog/:slug*',
                },
                {
                    source: '/api/:path*',
                    destination: '/api/:path*',
                },
                {
                    source: '/:path*',
                    destination: `${CRA_APP_BASE_URL}/:path*`,
                },
        ]}
    }
}

module.exports = nextConfig
