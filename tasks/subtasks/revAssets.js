const settings = require("../settings.js");
const Version = require("node-version-assets");
const globby = require("globby");

const assets = ["src/compiled/*.css", "src/compiled/*.js"];

(async () => {
  try {
    const paths = await globby(assets);

    new Version({
      assets: paths,
      grepFiles: [`./src${settings.templatePath}`]
    }).run();
  } catch (err) {
    console.error(err);
  }
})();
