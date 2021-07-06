const jsonTokens = require('@wonderflow/tokens/platforms/web/tokens.json')
const flatten = require('flat')

/**
 * Prepare env variables from tokens
 * to be assigned to postcss-preset-env
 */
const flatTokens = flatten(jsonTokens, {
  delimiter: '-'
})
const environmentVariables = Object.keys(flatTokens).reduce((acc, key) => {
  const newKey = `--${key}`
  acc[newKey] = `${flatTokens[key]}`
  return acc
}, {})

module.exports = {
  plugins: {
    'postcss-easy-import': {
      extensions: '.css'
    },
    'postcss-preset-env': {
      stage: 0,
      importFrom: [{
        environmentVariables
      }],
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false
      }
    },
    'postcss-inset': {},
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }
  }
}
