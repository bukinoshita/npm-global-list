const fs = require('fs-extra')
const globalModules = require('global-modules')

module.exports = () => fs.readdir(globalModules)
