/**
 * Creates a string of file owners
 *
 * @param {string[]} ownerLogins - List of owner's logins.
 * @returns {string}
 */

// TODO: retrieve logins in a different way right in this function
const createYaownersContent = (ownerLogins = ['boocmp']) => ownerLogins
    .map(login => `${login}@yandex-team.ru`)
    .join('\n');

module.exports = {
    createYaownersContent,
};