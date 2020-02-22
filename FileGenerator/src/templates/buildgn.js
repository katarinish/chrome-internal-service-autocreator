const {createCopyrightHeader} = require('./headline');

const createBuildGnContent = (mojomName) => `${createCopyrightHeader()}
    
import("//mojo/public/tools/bindings/mojom.gni")

mojom("mojo_bindings") {
  sources = [
    "${mojomName}.mojom",
  ]
}`;

module.exports = {
    createBuildGnContent,
};