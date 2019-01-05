var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.len = 0;
  someInstance.firstKey = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

 var queueMethods = {};
 
 queueMethods.enqueue = function(value){
  this.storage[this.len] = value;
  this.len++;
 };

 queueMethods.dequeue = function(){
 	var firstEl = this.storage[this.firstKey];
 	if(this.len - this.firstKey <= 0){
 		return 0;
 	} else {
 		delete(this.storage[this.firstKey]);
        this.firstKey++; 
        return firstEl;
 	}

 };

 queueMethods.size = function(){
  return this.len - this.firstKey;
 };

