const {currentGitConfig} = require('../gitConfig');
const {userEmail} = require('../../config');

/**
 * Creates a string of file owners
 *
 * @param {string[]} ownerEmails - List of owner's emails.
 * @returns {string}
 */
const createYaownersContent = (ownerEmails = [currentGitConfig.email || userEmail]) => ownerEmails
    .join('\n');

module.exports = {
    createYaownersContent,
};