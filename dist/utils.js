"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var binaryTreeToQueryJson = function binaryTreeToQueryJson(tree) {
  var query = {};

  if (!tree || !tree.lexeme) {
    return query;
  }

  var cursor = tree;
  var currentType = tree.lexeme.type;

  query.type = currentType;

  if (currentType === "string") {
    query.value = tree.lexeme.value;
    return query;
  }

  query.values = [];

  while (cursor && cursor.lexeme.type === currentType) {
    if (cursor.left) {
      query.values.push(binaryTreeToQueryJson(cursor.left));
    }

    cursor = cursor.right;
  }

  if (cursor) {
    query.values.push(binaryTreeToQueryJson(cursor));
  }

  return query;
};

exports.binaryTreeToQueryJson = binaryTreeToQueryJson;

var binaryTreeToValues = function binaryTreeToValues(tree) {
  var values = [];

  var query = {};

  if (!tree || !tree.lexeme) {
    return [];
  }

  var cursor = tree;
  var currentType = tree.lexeme.type;

  query.type = currentType;

  if (currentType === "string") {
    values.push(tree.lexeme.value);
    return values;
  }

  while (cursor && cursor.lexeme.type === currentType) {
    if (cursor.left) {
      values.push.apply(values, _toConsumableArray(binaryTreeToValues(cursor.left)));
    }

    cursor = cursor.right;
  }

  if (cursor) {
    values.push.apply(values, _toConsumableArray(binaryTreeToValues(cursor)));
  }

  return values;
};

exports.binaryTreeToValues = binaryTreeToValues;