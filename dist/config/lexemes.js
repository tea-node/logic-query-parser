"use strict";

var lexerHelper = require("../helpers/lexer");
var syntaxerHelper = require("../helpers/syntaxer");
var postHelper = require("../helpers/post");

var andLexeme = {
  regexp: 'and(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: "i",
  lexer: lexerHelper.generateCutLexer("and", 3),
  syntaxer: syntaxerHelper.andSyntaxer,
  priority: 4,
  checker: ["endBlock", null]
};

// same as andLexeme
var plusLexeme = Object.assign({}, andLexeme, {
  regexp: '\\+(\\s|\\(|\\)|"|$)',
  lexer: lexerHelper.generateCutLexer("and", 1)
});

var orLexeme = {
  regexp: 'or(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: "i",
  lexer: lexerHelper.generateCutLexer("or", 2),
  syntaxer: syntaxerHelper.orSyntaxer,
  priority: 5,
  checker: ["endBlock", null]
};

var slashLexeme = Object.assign({}, orLexeme, {
  regexp: '\\/(\\s|\\(|\\)|"|$)',
  lexer: lexerHelper.generateCutLexer("or", 1)
});

var notLexeme = {
  regexp: 'not(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: "i",
  lexer: lexerHelper.generateCutLexer("not", 3),
  syntaxer: syntaxerHelper.notSyntaxer,
  priority: 6,
  checker: ["endBlock", null]
};

var dashedLineLexeme = Object.assign({}, notLexeme, {
  regexp: '\\-(\\s|\\(|\\)|"|$)',
  lexer: lexerHelper.generateCutLexer("not", 1)
});

var andNotLexeme = {
  regexp: 'and not(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: "i",
  lexer: lexerHelper.generateCutLexer("not", 7),
  syntaxer: syntaxerHelper.andNotSyntaxer,
  priority: 4,
  checker: ["endBlock", null]
};

var startBlockLexeme = {
  regexp: "\\(",
  escaped: true,
  lexer: lexerHelper.generateCutLexer("startBlock", 1),
  syntaxer: syntaxerHelper.blockSyntaxer,
  priority: 0,
  postFunction: postHelper.blockPostTreatment,
  checker: ["endBlock", null]
};

var endBlockLexeme = {
  regexp: "\\)",
  escaped: true,
  lexer: lexerHelper.generateCutLexer("endBlock", 1)
};

var stringLexeme = {
  regexp: '"?.*',
  lexer: lexerHelper.stringLexer([startBlockLexeme, endBlockLexeme]),
  syntaxer: syntaxerHelper.stringSyntaxer,
  priority: 0
};

module.exports = {
  andNot: andNotLexeme, // put it before not, it will works!!!
  and: andLexeme,
  or: orLexeme,
  not: notLexeme,
  plus: plusLexeme,
  slash: slashLexeme,
  dashedLine: dashedLineLexeme,
  startBlock: startBlockLexeme,
  endBlock: endBlockLexeme,
  string: stringLexeme
};