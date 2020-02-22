const path = require('path');

const {path: configPaths} = require('../../config');

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getHeaderName = (name, postfix) =>`${name}${postfix}`;

const getHeaderDir = (dirName, headerName) => path.format({
    dir: path.join(configPaths.webui, dirName),
    name: headerName,
    ext: '.h',
});

module.exports = {
    capitalizeFirstLetter,
    getHeaderName,
    getHeaderDir
};