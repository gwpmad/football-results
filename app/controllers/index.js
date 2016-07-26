const fs = require('fs');
const controllerObj = fs.readdirSync(__dirname)
  .reduce((memo, file) => {
    if(fs.statSync(`${__dirname}/${file}`).isFile() && file !== 'index.js') {
      const fileName = file.replace('.js', '');
      memo[fileName] = require(`./${fileName}`);
    }
    return memo;
  }, {});

module.exports = controllerObj;