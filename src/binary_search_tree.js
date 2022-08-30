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
    while (true) {
      if (current?.value === number) return true;
      if (current?.value > number) {
        current = current.left;
      } else if (current?.value < number) {
        current = current.right;
      } else return false;
    }
  }

  split() {
    if (!this.root) return null;
    let storedNodes = this.inOrder();
    console.log("inOrder nodes: ", storedNodes);

    let balanced = new Node(
      storedNodes[storedNodes.length / 2],
      undefined,
      undefined
    );
    this.root = balanced;
    for (const i of storedNodes.splice(0, storedNodes.length / 2)) {
      this.add(i);
    }
    for (const i of storedNodes) {
      this.add(i);
    }
    console.log("new root: ", this.root);
  }
}

module.exports = { BinarySearchTree };
