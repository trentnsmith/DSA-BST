function findBSTHeight(tree) {
    if (!tree) {
      return 0;
    }
    if (!tree.left && !tree.right) {
      return 1;
    }
    let height = 0;
    if (tree.right) {
      let rightHeight = 1 + findBSTHeight(tree.right);
      if (rightHeight > height) height = rightHeight;
    }
    if (tree.left) {
      let leftHeight = 1 + findBSTHeight(tree.left);
      if (leftHeight > height) height = leftHeight;
    }
    return height;
  }

  function isItBSTree(tree) {
    if (!tree) return false;
  
    if (tree.right) {
      if (tree.right.key > tree.key) {
        isItBSTree(tree.right);
      } else {
        return false;
      }
    }
  
    if (tree.left) {
      if (tree.left.key < tree.key) {
        isItBSTree(tree.left);
      } else {
        return false;
      }
    }
  
    return true;
  }

function findThirdNode(tree) {
  const height = findBSTHeight(tree);
  if (height < 2) {
    return null;
  } else if (height < 3) {
    if (tree.left && tree.right) {
      return tree.left.value;
    } else return null;
  } else if (height > 3) {
    return findThirdNode(tree.right);
  } else return tree.key;
}

function isBalanced(tree) {
    if (!tree) return false;
    if (!tree.right && !tree.left) return true;
    if (Math.abs(findBSTHeight(tree.right) - findBSTHeight(tree.left)) > 1)
      return false;
    return true;
  }

  function checkBSTFromArray(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) return false;
    if (arr1.length === 0 || arr2.length === 0) return true;
  
    const higher1 = [];
    const higher2 = [];
    const lower1 = [];
    const lower2 = [];
  
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] > arr1[0]) {
        higher1.push(arr1[i]);
      } else {
        lower1.push(arr1[i]);
      }
    }
  
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[i] > arr2[0]) {
        higher2.push(arr2[i]);
      } else {
        lower2.push(arr2[i]);
      }
    }
  
    return (
      checkBSTFromArray(higher1, higher2) && checkBSTFromArray(lower1, lower2)
    );
  }
  
  const arr1 = [3, 5, 4, 6, 1, 0, 2];
  const arr2 = [3, 1, 5, 2, 4, 6, 0];
  console.log(checkBSTFromArray(arr1, arr2));