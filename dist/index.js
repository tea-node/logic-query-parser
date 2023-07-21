"use strict";

var lexemes = require("./config/lexemes.js");
var lexer = require("./lib/lexer.js");
var checker = require("./lib/checker.js");
var syntaxer = require("./lib/syntaxer.js");

module.exports.parse = function (options, query) {
  if (!query) {
    query = options;
    options = {};
  }

  var lexemesArray = lexer.strToLexemes(query, options.spaces ? options.spaces : " \t\n");

  checker.check(lexemesArray);

  var tree = syntaxer.lexemesArrayToBinaryTree(options, lexemesArray);

  Object.keys(lexemes).forEach(function (name) {
    if (lexemes[name].postFunction) {
      tree = lexemes[name].postFunction(tree);
    }
  });

  return tree;
};

module.exports.utils = require("./utils");