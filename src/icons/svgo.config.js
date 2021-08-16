module.exports = {
  multipass: true,
  js2svg: {
    pretty: true
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIDs: {
            minify: true
          },
          cleanupNumericValues: {
            floatPrecision: 2
          },
          convertColors: {
            names2hex: true,
            rgb2hex: true
          },
          removeViewBox: false,
          removeMetadata: false,
          removeStyleElement: true,
          removeTitle: true,
          removeUselessStrokeAndFill: true,
          removeAttrs: {
            attrs: [
              '*:fill:#000000',
              '*:fill:black',
              '*:fill:#000',
              '*:fill:none'
            ]
          },
          inlineStyles: true
        }
      }
    }
  ]
}
