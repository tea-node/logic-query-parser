const lexemes = require("../config/lexemes.js");

const check = (current, next, config) => {
  for (let i = 0, c = config.length; i < c; i += 1) {
    if (next === config[i]) {
      if (next === "endBlock" && current === "startBlock") {
        throw new Error("Empty block");
      }
      throw new Error(
        (next ? next : "end of string") + " just after " + current
      );
    }
  }
};

module.exports.check = (lexemesArray) => {
  let i = 0;
  let next = null;

  while (lexemesArray[i]) {
    next = lexemesArray[i + 1];

    if (lexemes[lexemesArray[i].type].checker) {
      check(
        lexemesArray[i].type,
        next ? next.type : null,
        lexemes[lexemesArray[i].type].checker
      );
    }

    i += 1;
  }
};
