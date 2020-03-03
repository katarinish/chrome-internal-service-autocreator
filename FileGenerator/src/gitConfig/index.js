const gitconfig = require('git-config-path');
const parse = require('parse-git-config');

const getCurrentConfig = () => {
    const globalGitConfigPath = gitconfig({type: 'global'});
    const options = {cwd: '/', path: globalGitConfigPath};
    const config = parse.sync(options) || {};

    return config.user;
};

const currentGitConfig = getCurrentConfig();

module.exports = {
    currentGitConfig,
};
