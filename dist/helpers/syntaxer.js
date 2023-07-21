"use strict";

var getLowPriorityBlock = function getLowPriorityBlock(tree, priority) {
  var lexemes = require("../config/lexemes");

  if (priority === undefined) {
    priority = -1;
  }

  if (!tree.lexeme || lexemes[tree.lexeme.type].priority < priority || tree.right === null) {
    return tree;
  }

  return getLowPriorityBlock(tree.right, priority);
};

var defaultOperator = function defaultOperator(options, currentBlock, newBlock) {
  var tempLexeme = {
    type: currentBlock.lexeme.type,
    value: currentBlock.lexeme.value
  };

  // '"hello there" OR welcome here'
  currentBlock.lexeme = {
    type: options.defaultOperator || "and"
  };

  currentBlock.left = {
    lexeme: tempLexeme,
    left: currentBlock.left,
    right: currentBlock.right
  };

  currentBlock.right = newBlock;

  if (!currentBlock.lexeme.value) {
    delete currentBlock.lexeme.value;
  }
};

exports.stringSyntaxer = function (options, lexemesArray, i, tree) {
  var lexemes = require("../config/lexemes");

  var block = getLowPriorityBlock(tree, lexemes.string.priority);

  var lexeme = lexemesArray[i];

  var tempLexeme = {
    type: "string",
    value: lexeme.value
  };

  if (block.lexeme) {
    defaultOperator(options, block, {
      lexeme: tempLexeme,
      left: null,
      right: null
    });
    return i + 1;
  }

  block.lexeme = tempLexeme;

  block.left = null;
  block.right = null;

  return i + 1;
};

var generateBasicSyntaxer = function generateBasicSyntaxer(type) {
  return function (options, lexemesArray, i, tree) {
    var lexemes = require("../config/lexemes");

    var block = getLowPriorityBlock(tree, lexemes[type].priority);

    if (!block.lexeme) {
      var _lexemes = lexemesArray.slice(i + 1) || [];

      var values = _lexemes.map(function (lexeme) {
        return lexeme.value;
      });

      throw new Error("Nothing before " + type + " block, values: " + values);
    }

    var tempLexeme = {
      type: block.lexeme.type,
      value: block.lexeme.value
    };

    block.lexeme = {
      type: type
    };

    block.left = {
      lexeme: tempLexeme,
      left: block.left,
      right: block.right
    };

    block.right = {};

    if (!block.left.lexeme.value) {
      delete block.left.lexeme.value;
    }

    return i + 1;
  };
};

exports.andSyntaxer = generateBasicSyntaxer("and");

exports.orSyntaxer = generateBasicSyntaxer("or");

exports.notSyntaxer = generateBasicSyntaxer("not");

exports.andNotSyntaxer = generateBasicSyntaxer("andNot");

exports.blockSyntaxer = function (options, lexemesArray, i, tree, createTree) {
  var lexemes = require("../config/lexemes");

  var block = getLowPriorityBlock(tree, lexemes.startBlock.priority);

  var tempLexeme = {
    type: "startBlock"
  };

  var newBlock = createTree("endBlock", i + 1);

  if (block.lexeme) {
    defaultOperator(options, block, {
      lexeme: tempLexeme,
      left: newBlock,
      right: null
    });
    return;
  }

  block.lexeme = tempLexeme;
  block.left = newBlock;
  block.right = null;
};