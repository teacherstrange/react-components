const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv.name)

module.exports = {
  source: [`./src/themes/${argv.name}.json`],
  platforms: {
    web: {
      buildPath: 'dist/themes/',
      transformGroup: 'css',
      files: [
        {
          format: 'css/variables',
          destination: `${argv.name}.css`
        },
        {
          format: 'json/flat',
          destination: `${argv.name}.json`
        }
      ],
      options: {
        showFileHeader: true
      }
    }
  }
}
