const config = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [new URL('https://www.datocms-assets.com/**')],
  },
};

export default config;
