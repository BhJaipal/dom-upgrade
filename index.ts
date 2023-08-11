"use strict";
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV !== "production") {
  module.exports= require("./dist/@types/dom-upgrade.cjs.dev.ts");
} else {
  module.exports= require("./dist/@types/dom-upgrade.cjs.prod.min.ts");
  
}