const fs = require('fs');
const { isNonIndexFile } = require('../lib/utils');

const controllerObj = fs.readdirSync(__dirname)
  .reduce((memo, file) => {
    if(isNonIndexFile(file, __dirname)) {
      const fileName = file.replace('.js', '');
      memo[fileName] = require(`./${fileName}`);
    }
    return memo;
  }, {});

module.exports = controllerObj;