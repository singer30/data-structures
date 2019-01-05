var Stack = function() {
  var someInstance = {};
  someInstance.len = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  
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


