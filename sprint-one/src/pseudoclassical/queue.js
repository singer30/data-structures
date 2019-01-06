var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.firstKey = 0;
  this.storage = {};
};
  Queue.prototype.enqueue = function(value){
    this.storage[this.len] = value;
    this.len++;
  };
  Queue.prototype.dequeue = function(){
   	var firstEl = this.storage[this.firstKey];
 	if(this.len - this.firstKey <= 0){
 		return 0;
 	} else {
 		delete(this.storage[this.firstKey]);
        this.firstKey++; 
        return firstEl;
 	}
  };
  Queue.prototype.size = function(){
    return this.len - this.firstKey;
  };
var stacksto = new Queue();
