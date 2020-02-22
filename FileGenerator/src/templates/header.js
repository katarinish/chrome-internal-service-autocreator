const path = require('path');

const {path: configPaths, pathSeparator} = require('../../config');
const {getHeaderName, getHeaderDir} = require('../utils');

const {createCopyrightHeader} = require('./headline');

const template = (postfix) => (name) => {
    const headerName = getHeaderName(name, postfix);

    const formattedHeaderPath = getHeaderDir(name, headerName)
        .split(pathSeparator)
        .map(part => part.toUpperCase())
        .join('_');

    const mojomHeaderPath = path.format({
        dir: path.join(configPaths.webui, name),
        name,
        ext: '.mojom.h'
    });

    return`${createCopyrightHeader()}
    
#ifndef ${formattedHeaderPath}_
#define ${formattedHeaderPath}_

#include "${mojomHeaderPath}"


    
#endif  // ${formattedHeaderPath}_`;
};

const createHandlerHeaderContent = template('_page_handler');
const createUiHeaderContent = template('_ui');

module.exports = {
    createHandlerHeaderContent,
    createUiHeaderContent,
    getHeaderDir,
    getHeaderName,
};