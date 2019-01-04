var Stack = function() {
  var someInstance = {};
  someInstance.len = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.len] = value;
    someInstance.len++;
  };

  someInstance.pop = function() { 
    var lastVal = storage[someInstance.len-1];
    delete storage[someInstance.len]; 
    someInstance.len--;
    if(someInstance.len < 0){
      someInstance.len = 0;
    }
     return lastVal;
  };

  someInstance.size = function() {
    return someInstance.len;
  }
  return someInstance;
};

// delete storage[someInstance.len]; 
 //someInstance.len--;
//if(someInstance.len < 0){
    //   someInstance.len = 0;
    // }
// return storage[someInstance.len-1];