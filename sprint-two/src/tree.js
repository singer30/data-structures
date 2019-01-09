var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];   
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a tree that has the value from user
  // we need to push the new tree in array
  var treeChild = Tree(value);
  this.children.push(treeChild);
};

treeMethods.contains = function(target) {
  // declare a result as false
  // if targetnodes value = target  set result as true
  // else check if targetnodes have children
  // if yes loop through the children
  // check if children value is equal to target then set the result as true
  // return result
  var result = false;
  var checkTarget = function(obj) {
    var currentTree = obj;
    if (currentTree.value === target) {
      result = true;
    } if (currentTree.children) {
      for (var i = 0; i < currentTree.children.length; i++) {
        checkTarget(currentTree.children[i]);
      }
    }

  };
  checkTarget(this);
  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
