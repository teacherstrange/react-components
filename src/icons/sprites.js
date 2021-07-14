/* eslint-disable @typescript-eslint/no-var-requires, no-console */

const svgstore = require('svgstore')
const path = require('path')
const fs = require('fs-extra')
const dt = require('directory-tree')
const ora = require('ora')

const generateTypes = jsonStructure => `
export type IconNames = '${jsonStructure.iconNames.join('\' |\n\'')}';
export type IconTypes = '${jsonStructure.iconTypes.join('\' |\n\'')}';
`

const run = () => {
  const spinner = ora('Processing icons...').start()
  const directories = dt(path.join('src', 'icons', 'svgs'))
  fs.ensureDirSync('dist/icons')

  const jsonStructure = {
    svgs: {},
    iconNames: [],
    iconTypes: []
  }

  const sprite = svgstore()

  directories.children.forEach((dir) => {
    jsonStructure.svgs[dir.name] = []
    jsonStructure.iconTypes.push(dir.name)
    dir.children && dir.children.forEach((file) => {
      const iconID = `${dir.name}/${file.name.replace('.svg', '')}`

      sprite.add(iconID, fs.readFileSync(file.path, 'utf8'))
      jsonStructure.svgs[dir.name].push(file.name)
      jsonStructure.iconNames.push(`${file.name.replace('.svg', '')}`)
    })
  })
  fs.writeFileSync(path.join('dist', 'icons', 'all.svg'), sprite)
  fs.writeFileSync(path.join('src', 'icons', 'all.svg'), sprite)
  fs.writeFileSync(path.join('dist', 'icons', 'structure.json'), JSON.stringify(jsonStructure, null, 2))
  fs.writeFileSync(path.join('dist', 'icons', 'types.d.ts'), generateTypes(jsonStructure))
  fs.writeFileSync(path.join('src', 'icons', 'types.d.ts'), generateTypes(jsonStructure))
  spinner.succeed('Icons and types generated')
}

try {
  run()
  process.exit(0)
} catch (error) {
  console.error('⚠️ Something went wrong:', error)
  process.exit(1)
}
