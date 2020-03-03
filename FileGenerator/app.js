const path = require('path');

const {writeToPath} = require('./src/creator');
const {fileNameToTemplateContentMap} = require('./src/templates');

const {createFileNames, path: configPaths} = require('./config');

const generateFiles = (serviceName) => {
    const filesToGenerate = createFileNames(serviceName);

    Object.entries(filesToGenerate).forEach(([dirType, fileNames]) => {
        const rootDir = configPaths.root;
        const additionalDirPath = configPaths[dirType];

        const finalFilePath = path.join(rootDir, additionalDirPath, serviceName);

        for (let [fileType, fileName] of Object.entries(fileNames)) {
            writeToPath(finalFilePath)(
                fileName,
                fileNameToTemplateContentMap[fileType](serviceName)
            );
        }
    });
};

module.exports = {
    generateFiles,
};
