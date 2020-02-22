const app = require('./app');

const {serviceName} = require('./config');

const commonFileNamePart = serviceName
    .split(' ')
    .join('_');

app.generateFiles(commonFileNamePart);