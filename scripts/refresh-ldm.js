#!/usr/bin/env node

require("@babel/register")({
    presets: ["@babel/preset-typescript", "@babel/preset-env"],
    plugins: ["add-module-exports"],
    extensions: [".ts", ".js"],
});

const { workspace, backend } = require("../src/constants");
const path = "./src/ldm/full.js";
process.argv.push("--project-id", workspace, "--hostname", backend, "--output", path, "--accept-untrusted-ssl");
require("../node_modules/@gooddata/catalog-export");
