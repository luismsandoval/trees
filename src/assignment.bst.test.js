const { BinarySearchTree } = require("./binary_search_tree.js");

describe("Binary Search Tree", () => {
  const tree = new BinarySearchTree();
  const tree2 = new BinarySearchTree();
  for (const i of [2, 3, 11, 6, 9, 7, 5, 1]) {
    tree.add(i);
  }
  for (const i of [5, 3, 10, 1, 8, 15]) {
    tree2.add(i);
  }

  // console.log(JSON.stringify(tree, undefined, " "));

  it("adds & maintains items in order", () => {
    expect(tree.inOrder()).toEqual([1, 2, 3, 5, 6, 7, 9, 11]);
  });

  it("looks up whether an item is in the tree", () => {
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(8)).toBe(false);
  });

  it("rebalances BST with split", () => {
    expect(tree.split());
  });

  it("finds the max value in a tree", () => {
    expect(tree.max()).toEqual(11);
    expect(tree2.max()).toEqual(15);
  });
});
