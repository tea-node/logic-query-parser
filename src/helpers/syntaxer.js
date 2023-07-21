const getLowPriorityBlock = (tree, priority) => {
  const lexemes = require("../config/lexemes");

  if (priority === undefined) {
    priority = -1;
  }

  if (
    !tree.lexeme ||
    lexemes[tree.lexeme.type].priority < priority ||
    tree.right === null
  ) {
    return tree;
  }

  return getLowPriorityBlock(tree.right, priority);
};

const defaultOperator = (options, currentBlock, newBlock) => {
  const tempLexeme = {
    type: currentBlock.lexeme.type,
    value: currentBlock.lexeme.value,
  };

  // '"hello there" OR welcome here'
  currentBlock.lexeme = {
    type: options.defaultOperator || "and",
  };

  currentBlock.left = {
    lexeme: tempLexeme,
    left: currentBlock.left,
    right: currentBlock.right,
  };

  currentBlock.right = newBlock;

  if (!currentBlock.lexeme.value) {
    delete currentBlock.lexeme.value;
  }
};

exports.stringSyntaxer = (options, lexemesArray, i, tree) => {
  const lexemes = require("../config/lexemes");

  const block = getLowPriorityBlock(tree, lexemes.string.priority);

  const lexeme = lexemesArray[i];

  const tempLexeme = {
    type: "string",
    value: lexeme.value,
  };

  if (block.lexeme) {
    defaultOperator(options, block, {
      lexeme: tempLexeme,
      left: null,
      right: null,
    });
    return i + 1;
  }

  block.lexeme = tempLexeme;

  block.left = null;
  block.right = null;

  return i + 1;
};

const generateBasicSyntaxer = (type) => {
  return (options, lexemesArray, i, tree) => {
    const lexemes = require("../config/lexemes");

    const block = getLowPriorityBlock(tree, lexemes[type].priority);

    if (!block.lexeme) {
      const lexemes = lexemesArray.slice(i + 1) || [];

      const values = lexemes.map((lexeme) => lexeme.value);

      throw new Error(`Nothing before ${type} block, values: ${values}`);
    }

    const tempLexeme = {
      type: block.lexeme.type,
      value: block.lexeme.value,
    };

    block.lexeme = {
      type: type,
    };

    block.left = {
      lexeme: tempLexeme,
      left: block.left,
      right: block.right,
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

exports.blockSyntaxer = (options, lexemesArray, i, tree, createTree) => {
  const lexemes = require("../config/lexemes");

  const block = getLowPriorityBlock(tree, lexemes.startBlock.priority);

  const tempLexeme = {
    type: "startBlock",
  };

  const newBlock = createTree("endBlock", i + 1);

  if (block.lexeme) {
    defaultOperator(options, block, {
      lexeme: tempLexeme,
      left: newBlock,
      right: null,
    });
    return;
  }

  block.lexeme = tempLexeme;
  block.left = newBlock;
  block.right = null;
};
