const lexemes = require("./config/lexemes.js");
const lexer = require("./lib/lexer.js");
const checker = require("./lib/checker.js");
const syntaxer = require("./lib/syntaxer.js");

module.exports.parse = (options, query) => {
  if (!query) {
    query = options;
    options = {};
  }

  const lexemesArray = lexer.strToLexemes(
    query,
    options.spaces ? options.spaces : " \t\n"
  );

  checker.check(lexemesArray);

  let tree = syntaxer.lexemesArrayToBinaryTree(options, lexemesArray);

  Object.keys(lexemes).forEach(function (name) {
    if (lexemes[name].postFunction) {
      tree = lexemes[name].postFunction(tree);
    }
  });

  return tree;
};

module.exports.utils = require("./utils");
