#!/usr/bin/env node

"use strict";

const gmInstalled = require("gm-installed")
    , childProcess = require("child_process")
    ;

if (gmInstalled()) {
    return console.log("Detected GraphicsMagick. Using it. :)");
}

console.log("Installing lwip. If this fails, just install GraphicsMagick (http://www.graphicsmagick.org/).");
let proc = childProcess.spawn("npm", ["i", "lwip@0.0.8"], { cwd: `${__dirname}/..` });

proc.stdout.pipe(process.stdout);
proc.stderr.pipe(process.stderr);
