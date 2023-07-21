"use strict";

var generateRegexp = function generateRegexp(lexeme) {
  return new RegExp("^(" + lexeme.regexp + ")", lexeme.modifiers);
};

exports.generateRegexp = generateRegexp;

exports.generateCutLexer = function (type, length) {
  return function (str, lexemesArray) {
    lexemesArray.push({
      type: type,
      value: str.slice(0, length)
    });

    return str.slice(length);
  };
};

var endOfString = function endOfString(str, quoted, spaces, first, endLexemes) {
  if (str.length === 0) {
    return true;
  } else if (quoted) {
    return str.charAt(0) === '"';
  } else if (spaces.indexOf(str.charAt(0)) !== -1 || str.charAt(0) === '"') {
    return true;
  }

  if (first) {
    return false;
  }

  return endLexemes.some(function (lexeme) {
    return generateRegexp(lexeme).test(str);
  });
};

exports.stringLexer = function (endLexemes) {
  return function (str, lexemesArray, spaces) {
    var i = 0;
    var first = true;
    var quoted = false;
    var value = "";

    if (str.charAt(0) === '"') {
      quoted = true;
      i = 1;
      str = str.slice(1);
    }

    while (!endOfString(str, quoted, spaces, first, endLexemes)) {
      if (str.charAt(0) === "\\") {
        value += str.charAt(1);
        str = str.slice(2);
        continue;
      }

      value += str.charAt(0);

      str = str.slice(1);

      first = false;
    }

    if (quoted && str.charAt(0) !== '"') {
      throw new Error("Can't reach end of quoted string");
    } else if (quoted) {
      str = str.slice(1);
    }

    lexemesArray.push({
      type: "string",
      value: value
    });

    return str;
  };
};

exports.clearSpaces = function (str, spaces) {
  var i = 0;

  while (i < str.length && spaces.indexOf(str.charAt(i)) !== -1) {
    i += 1;
  }

  return str.slice(i);
};