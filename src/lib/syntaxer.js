const lexemes = require("../config/lexemes.js");

module.exports.lexemesArrayToBinaryTree = (options, lexemesArray) => {
  let i = 0;

  const createTree = (end, newI) => {
    const tree = {};

    if (newI) {
      i = newI;
    }

    while (lexemesArray[i] && lexemesArray[i].type !== end) {
      if (!lexemes[lexemesArray[i].type].syntaxer) {
        throw new Error("Unexpected token " + lexemesArray[i].type);
      }

      const temp = lexemes[lexemesArray[i].type].syntaxer(
        options,
        lexemesArray,
        i,
        tree,
        createTree
      );

      if (temp) {
        i = temp;
      }
    }

    if (end && !lexemesArray[i]) {
      throw new Error("Bad end of block");
    } else if (end) {
      i += 1;
    }

    return tree;
  };

  return createTree(null);
};
