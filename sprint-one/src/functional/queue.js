var Queue = function() {
  var someInstance = {};
  someInstance.len = 0;
  someInstance.firstKey = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  
  // Implement the methods below

  someInstance.enqueue = function(value) {
  storage[someInstance.len] = value;
  someInstance.len++;
  };

  someInstance.dequeue = function() {
    var firstEl = storage[someInstance.firstKey];
    if(someInstance.len - someInstance.firstKey <= 0){
      return 0;
    } else {
    delete(storage[someInstance.firstKey]);
    someInstance.firstKey++; 
    return firstEl;
  }
  };

  someInstance.size = function() { 
    return someInstance.len - someInstance.firstKey;
  };

  return someInstance;
};
