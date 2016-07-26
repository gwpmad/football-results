const fs = require('fs');

const isNonIndexFile = (file, dir) =>
    fs.statSync(`${dir}/${file}`).isFile() && file !== 'index.js'

module.exports = {
    isNonIndexFile
}