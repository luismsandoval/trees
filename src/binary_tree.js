// As a function //

// function preOrder(root) {
//   // Root, Left, Right
//   // Return a single array
//   let traversal = [];
//   traversal.push(root.value); // Root

//   if (root.left) {
//     // Left
//     let leftTraversal = preOrder(root.left);
//     traversal = traversal.concat(leftTraversal);
//   }

//   // Right
//   if (root.right) {
//     let rightTraversal = preOrder(root.right);
//     traversal = traversal.concat(rightTraversal);
//   }

//   return traversal;
// }

// const preOrderOneLine = (root) =>
//   root ? [root.value, ...preOrder(root.left), ...preOrder(root.right)] : [];

function breadthFirst(tree) {
  if (!tree.root) return null;

  let queue = [];
  let list = [];
  queue.push(tree.root);

  while (queue.length !== 0) {
    let temp = queue.shift();
    list.push(temp.value);

    if (temp.left) {
      queue.push(temp.left);
    }

    if (temp.right) {
      queue.push(temp.right);
    }
  }
  console.log("list", list);
  return list;
}

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }

  preOrder() {
    // Root, Left, Right
    // Return a single array
    let traversal = [];
    traversal.push(this.value); // Root

    // Left
    if (this.left) {
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  inOrder() {
    // Left, Root, Right
    let traversal = [];

    // Left
    if (this.left) {
      let leftTraversal = this.left.inOrder();
      traversal = traversal.concat(leftTraversal);
    }

    traversal.push(this.value); // Root

    // Right
    if (this.right) {
      let rightTraversal = this.right.inOrder();
      traversal = traversal.concat(rightTraversal);
    }
    return traversal;
  }

  postOrder() {
    // Left, Right, Root
    let traversal = [];

    // Left
    if (this.left) {
      let leftTraversal = this.left.postOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = traversal.concat(rightTraversal);
    }

    traversal.push(this.value); // Root

    return traversal;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    return this.root.preOrder();
  }
  inOrder() {
    return this.root.inOrder();
  }
  postOrder() {
    return this.root.postOrder();
  }
}

module.exports = { Node, BinaryTree, breadthFirst };
