var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.len = 0;
  someInstance.storage = {};
  
  return someInstance;

};

var stackMethods = {};
  
  stackMethods.push = function(value){
     this.storage[this.len] = value;
     this.len++;
  };

  stackMethods.pop = function(){
    var lastVal = this.storage[this.len-1];
    delete this.storage[this.len]; 
    this.len--;
    if(this.len < 0){
       this.len = 0;
    }
    return lastVal;
  };

  stackMethods.size = function(){
    return this.len;
  };

