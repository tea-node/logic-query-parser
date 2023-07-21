const lexemes = require("../config/lexemes.js");
const helpers = require("../helpers/lexer.js");
const syntaxError = require("./error.js");

module.exports.strToLexemes = (str, spaces) => {
  const lexemesArray = [];

  const strLength = str.length;

  let cursor = 0;
  let step = 0;

  str = helpers.clearSpaces(str, spaces);

  cursor = strLength - str.length;

  while (str.length > 0) {
    let escaped = false;

    if (str.charAt(0) === "\\") {
      escaped = true;
      str = str.slice(1);

      if (str.length === 0) {
        step = strLength;

        throw new syntaxError("Backslash at end of string", cursor, step);
      }
    }

    const ret = Object.keys(lexemes).some(function (name) {
      if (escaped && lexemes[name].escaped) {
        return false;
      }

      const regexp = helpers.generateRegexp(lexemes[name]);

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
  }

  return lexemesArray;
};
