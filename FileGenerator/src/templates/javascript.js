const {createCopyrightHeader} = require('./headline');

const createJSContent = (name) => `${createCopyrightHeader()}

(function () {
  async function update() {
  
  
  }
  
  document.addEventListener('DOMContentLoaded', update);
})();
`;

module.exports = {
    createJSContent
};