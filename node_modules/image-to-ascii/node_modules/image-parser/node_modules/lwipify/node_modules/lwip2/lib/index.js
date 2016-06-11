"use strict";

const Err = require("err");

try {
    module.exports = require("lwip")
} catch (e) {
    e = new Err("Failed to load lwip. Use GraphicsMagick instead.", "CANNOT_LOAD_LWIP", { reason: e });
    module.exports = {
        open: (source, type, cb) => cb ? cb(e) : type(e)
      , create: (width, height, color, cb) => cb(e)
    };
}
