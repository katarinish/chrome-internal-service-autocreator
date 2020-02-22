const path = require('path');

// "/" on POSIX & "\" on Windows
const PATH_SEPARATOR = path.sep;

const ENTRY_POINT_PATH = path.join(
    process.env.BROWSER_PATH || '/Users/katarinish/Documents/uni/chromium',
    'src'
);

const CHROME_DIR = `${PATH_SEPARATOR}chrome`;
const BROWSER_DIR = `${PATH_SEPARATOR}browser`;

const SERVICE_NAME = process.env.SERVICE_NAME || 'web app internals';

module.exports = {
    path: {
        root: ENTRY_POINT_PATH,
        app: path.join(CHROME_DIR, 'app'),
        resources: path.join(CHROME_DIR, BROWSER_DIR, 'resources', 'yandex'),
        webui: path.join(CHROME_DIR, BROWSER_DIR, 'ui', 'webui', 'yandex'),
        common: path.join(CHROME_DIR, 'common'),
    },

    serviceName: SERVICE_NAME,

    pathSeparator: PATH_SEPARATOR,

    createFiles: (name) => ({
        webui: {
            buildgn: 'BUILD.gn',
            yaowners: 'YAOWNERS',
            mojom: `${name}.mojom`,
            cppHandler: `${name}_page_handler.cc`,
            headerHandler: `${name}_page_handler.h`,
            cppUi: `${name}_ui.cc`,
            headerUi:`${name}_ui.h`,
        },
        resources: {
            html: `${name}.html`,
            js: `${name}.js`,
        },
    }),
};