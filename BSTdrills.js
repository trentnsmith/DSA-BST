const BinarySearhTree = require('./BST');
const BinarySearchTree = require('./BST');

function main() {
    const BST = new BinarySearchTree();
    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);
}

function main2() {
    const BST = new BinarySearchTree();
    BST.insert('E');
    BST.insert('A');
    BST.insert('S');
    BST.insert('Y');
    BST.insert('Q');
    BST.insert('U');
    BST.insert('E');
    BST.insert('S');
    BST.insert('T');
    BST.insert('I');
    BST.insert('O');
    BST.insert('N');
}

function tree (t) {
    if (!t) {
      return 0;
    }
    return tree(t.left) + t.value + tree(t.right);
  }
  
  //This function returns the sum of all values within the tree. It will have runtime O(n),
  //since it will be called once on every node within the tree.

  