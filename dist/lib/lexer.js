"use strict";

var lexemes = require("../config/lexemes.js");
var helpers = require("../helpers/lexer.js");
var syntaxError = require("./error.js");

module.exports.strToLexemes = function (str, spaces) {
  var lexemesArray = [];

  var strLength = str.length;

  var cursor = 0;
  var step = 0;

  str = helpers.clearSpaces(str, spaces);

  cursor = strLength - str.length;

  var _loop = function _loop() {
    var escaped = false;

    if (str.charAt(0) === "\\") {
      escaped = true;
      str = str.slice(1);

      if (str.length === 0) {
        step = strLength;

        throw new syntaxError("Backslash at end of string", cursor, step);
      }
    }

    var ret = Object.keys(lexemes).some(function (name) {
      if (escaped && lexemes[name].escaped) {
        return false;
      }

      var regexp = helpers.generateRegexp(lexemes[name]);

      if (regexp.test(str)) {
        str = lexemes[name].lexer(str, lexemesArray, spaces);
        return true;
      }

      return false;
    });

    if (!ret) {
      throw new Error("Unknow character : " + str.charAt(0));
    }

    str = helpers.clearSpaces(str, spaces);
  };

  while (str.length > 0) {
    _loop();
  }

  return lexemesArray;
};