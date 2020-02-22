const {createCopyrightHeader} = require('./headline');

const {capitalizeFirstLetter} = require('../utils');

const buildHandlerName = (moduleName) => moduleName
    .split('_')
    .map(capitalizeFirstLetter)
    .join('');

const createMojomContent = (moduleName) => `${createCopyrightHeader()}
    
module ${moduleName}.mojom;

interface ${buildHandlerName(moduleName)}PageHandler {
  GetData() => (string data);
};`;

module.exports = {
    createMojomContent
};