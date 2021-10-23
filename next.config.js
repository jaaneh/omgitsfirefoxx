// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules[2].oneOf.forEach((moduleLoader, i) => {
      Array.isArray(moduleLoader.use) &&
        moduleLoader.use.forEach(l => {
          if (l.loader.includes('\\css-loader') && !l.loader.includes('postcss-loader')) {
            const { getLocalIdent, ...others } = l.options.modules
            l.options = {
              ...l.options,
              modules: {
                ...others,
                localIdentName: '[hash:base64:6]'
              }
            }
          }
        })
    })
    return config
  },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
