const fs = require('fs');
const controllerObj = {};
const controllerList = fs.readdirSync(__dirname )
  .filter((file) => fs.statSync(`${__dirname}/${file}`).isFile()
  && file !== 'index.js')
    .map((name) => name.replace('.js', ''))

controllerList.forEach((file) => {
  controllerObj[file] = require(`./${file}`)
})

module.exports = controllerObj;
