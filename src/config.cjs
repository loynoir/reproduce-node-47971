const { importNamespaceSync } = require("./importSync.cjs");

module.exports = { plugin: importNamespaceSync("./plugin.mjs") };
