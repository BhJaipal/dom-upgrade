"use strict";
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV !== "production") {
  module.exports= require("./dist/dom-upgrade.cjs.dev.js");
} else {
  module.exports= require("./dist/dom-upgrade.cjs.prod.min.js");
}