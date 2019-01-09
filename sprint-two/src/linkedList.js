// A linked list would be great for....

// An itinerary you expect to add and remove destinations to and from.

// A linkedList class, in functional style, with the following properties:
// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
// What is the time complexity of the above functions?


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  // create a new node 
    var newNode = Node(value);
    // adjust our tails node next refernce to our new node
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } 
    if (list.head.next === null) {
      list.head.next = newNode;
      list.tail = newNode;
    } else {
    // change our tails reference itself to new last value
      var oldtail = list.tail;
      oldtail.next = newNode;
      list.tail = newNode;
    } 
  };

  list.removeHead = function() {
    var oldhead = list.head;
    list.head = list.head.next;
    return oldhead.value;
  };

  list.contains = function(target) {
    // check through all the nodes values
    // if any nodes value matches target then return true
    // if not then return false
    var result = false;
    var checkTarget = function(node) {
      var currentNode = node;
      if (currentNode.value === target) {
        result = true;
      } else if (currentNode.next === null) { 
        return;
      } else {
        checkTarget(node.next);
      }
    };
    checkTarget(list.head);
    return result;
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};