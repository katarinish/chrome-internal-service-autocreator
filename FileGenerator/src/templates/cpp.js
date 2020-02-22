const {createCopyrightHeader} = require('./headline');

const {getHeaderName, getHeaderDir} = require('../utils');

const template = (postfix) => (name) => {
    const headerName = getHeaderName(name, postfix);

    return `${createCopyrightHeader()}
    
#include "${getHeaderDir(name, headerName)}"`;
};

const createHandlerCppContent = template('_page_handler');
const createUiCppContent = template('_ui');

module.exports = {
    createHandlerCppContent,
    createUiCppContent,
};