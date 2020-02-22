const path = require('path');

const fse = require('fs-extra');

const writeToPath = dirPath => (file, content) => {
    const filePath = path.format({
        dir: dirPath,
        base: file,
    });

    fse.outputFile(filePath, content, err => {
        if (err) throw err;

        console.log("Created file: ", filePath);
        return true;
    });
};

module.exports = {
    writeToPath,
};