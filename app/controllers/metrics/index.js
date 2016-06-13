const fs = require('fs');
const metricObj = {};
const metricList = fs.readdirSync(__dirname )
  .filter((file) => fs.statSync(`${__dirname}/${file}`).isFile()
  && file !== 'index.js')
    .map((name) => name.replace('.js', ''))

metricList.forEach((file) => {
  metricObj[file] = require(`./${file}`)
})

module.exports = metricObj;
