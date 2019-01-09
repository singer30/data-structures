var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value; 
  binaryTree.left = undefined;
  binaryTree.right = undefined;
  return binaryTree;
};

var binaryTreeMethods = {};
/*
 * Complexity: What is the time complexity of the above functions?
 */
binaryTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = Object.create(binaryTreeMethods);
      this.left.value = value; 
      console.log(this.left.value, 'this is the left');
    } else {
      this.left.insert(value);
    }  
  } else {
    if (this.right === undefined) {
      this.right = Object.create(binaryTreeMethods); 
      this.right.value = value;
      console.log(this.right, 'this is the right');
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(target) {
  var ourTruth = false;
  if (target === this.value) {
    result = true;
  } else if (target < this.value) {
    if (this.left !== undefined) {
      return this.left.contains(target);
    } else {
      result = false;
    }
  } else if (target > this.value) {
    if (this.right !== undefined) {
      return this.right.contains(target);
    } else {
      result = false;
    } 
  }
  return result;
};

binaryTreeMethods.depthFirstLog = function() {
  
};
