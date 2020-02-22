const {capitalizeFirstLetter} = require('../utils');

const formatName = (name) => name
    .split('_')
    .map(capitalizeFirstLetter)
    .join(' ');

const createHtmlContent = (name) => `<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>${formatName(name)}</title>

  <script src="chrome://resources/mojo/mojo/public/js/mojo_bindings_lite.js"></script>
  <script src="${name}.mojom-lite.js"></script>
  <script src="${name}.js"></script>
</head>
<body>
  <div id="data"></div>
</body>
</html>
`;

module.exports = {
    createHtmlContent,
};