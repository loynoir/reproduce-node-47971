import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const config = require("../src/config.cjs");

console.log(config);
