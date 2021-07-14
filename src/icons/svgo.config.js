const { extendDefaultPlugins } = require('svgo')
module.exports = {
  multipass: true,
  js2svg: {
    pretty: true
  },
  plugins: extendDefaultPlugins([
    {
      name: 'cleanupIDs',
      params: {
        minify: true
      }
    },
    {
      name: 'cleanupNumericValues',
      params: {
        floatPrecision: 2
      }
    },
    {
      name: 'convertColors',
      params: {
        names2hex: true,
        rgb2hex: true
      }
    },
    {
      name: 'removeViewBox',
      active: false
    },
    {
      name: 'removeMetadata',
      active: false
    },
    {
      name: 'removeStyleElement',
      active: true
    },
    {
      name: 'removeTitle',
      active: true
    },
    {
      name: 'removeUselessStrokeAndFill',
      active: true
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          '*:fill:#000000',
          '*:fill:black',
          '*:fill:#000',
          '*:fill:none'
        ]
      }
    },
    {
      name: 'inlineStyles',
      active: true
    }
  ])
}
