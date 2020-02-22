const {createMojomContent} = require('./mojom');
const {createYaownersContent} = require('./yaowners');
const {createBuildGnContent} = require('./buildgn');
const {createHtmlContent} = require('./html');
const {createJSContent} = require('./javascript');
const {createHandlerCppContent, createUiCppContent} = require('./cpp');
const {createHandlerHeaderContent, createUiHeaderContent} = require('./header');

const fileNameToTemplateContentMap = {
    buildgn: (mojomName) => createBuildGnContent(mojomName),
    yaowners: () => createYaownersContent(),
    mojom: (moduleName) => createMojomContent(moduleName),
    cppHandler: (name) => createHandlerCppContent(name),
    headerHandler: (name) => createHandlerHeaderContent(name),
    cppUi: (name) => createUiCppContent(name),
    headerUi: (name) => createUiHeaderContent(name),
    html: (name) => createHtmlContent(name),
    js: (name) => createJSContent(name),
};

module.exports = {
    fileNameToTemplateContentMap,
};