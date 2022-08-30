const { Node, BinaryTree } = require("./binary_tree.js");

class BinarySearchTree extends BinaryTree {
  add(number) {
    let newNode = new Node(number, undefined, undefined);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (number === current.value) return undefined;
      if (number < current.value) {
        if (current.left === undefined) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === undefined) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  contains(number) {
    if (!this.root) return false;

    let current = this.root;
    const loop = true;
    while (loop) {
      if (current?.value === number) return true;
      if (current?.value > number) {
        current = current.left;
      } else if (current?.value < number) {
        current = current.right;
      } else return false;
    }
  }
}

module.exports = { BinarySearchTree };
