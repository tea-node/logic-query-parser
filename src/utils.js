const binaryTreeToQueryJson = (tree) => {
  const query = {};

  if (!tree || !tree.lexeme) {
    return query;
  }

  let cursor = tree;
  const currentType = tree.lexeme.type;

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

const binaryTreeToValues = (tree) => {
  const values = [];

  const query = {};

  if (!tree || !tree.lexeme) {
    return [];
  }

  let cursor = tree;
  const currentType = tree.lexeme.type;

  query.type = currentType;

  if (currentType === "string") {
    values.push(tree.lexeme.value);
    return values;
  }

  while (cursor && cursor.lexeme.type === currentType) {
    if (cursor.left) {
      values.push(...binaryTreeToValues(cursor.left));
    }

    cursor = cursor.right;
  }

  if (cursor) {
    values.push(...binaryTreeToValues(cursor));
  }

  return values;
};

exports.binaryTreeToValues = binaryTreeToValues;
