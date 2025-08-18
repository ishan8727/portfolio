module.exports = {
  images: {
    remotePatterns: [
      // Frontend Frameworks
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        pathname: '/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'reactnative.dev',
      },

      // Frontend Tech
      {
        protocol: 'https',
        hostname: 'static.framer.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/chakra-ui/chakra-ui/**',
      },

      // Databases
      {
        protocol: 'https',
        hostname: 'www.mysql.com',
      },
      {
        protocol: 'https',
        hostname: 'www.postgresql.org',
      },
      {
        protocol: 'https',
        hostname: 'webassets.mongodb.com',
      },

      // Backend Tech
      {
        protocol: 'https',
        hostname: 'nodejs.org',
      },

      // Tools
      {
        protocol: 'https',
        hostname: 'git-scm.com',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
      }
    ],
  },
}