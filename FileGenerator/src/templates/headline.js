const CURRENT_YEAR = new Date().getFullYear();

/**
 * Creates a copyright header
 *
 * @param {number} year - Copyright year.
 * @returns {string}
 */
const createCopyrightHeader = (year = CURRENT_YEAR) => `// Copyright ${year} Yandex LLC. All rights reserved.`;


module.exports = {
    createCopyrightHeader,
};
