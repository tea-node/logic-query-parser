const blockPostTreatment = (tree) => {
  if (!tree || !tree.lexeme) {
    return tree;
  }

  if (tree.lexeme.type === "startBlock") {
    tree.lexeme = {
      type: tree.left.lexeme.type,
      value: tree.left.lexeme.value,
    };

    if (!tree.lexeme.value) {
      delete tree.lexeme.value;
    }

    tree.right = tree.left.right;
    tree.left = tree.left.left;
  }

  blockPostTreatment(tree.right);
  blockPostTreatment(tree.left);

  return tree;
};

exports.blockPostTreatment = blockPostTreatment;
