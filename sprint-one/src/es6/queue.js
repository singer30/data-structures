class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.len = 0;
    this.firstKey = 0;
    this.storage = {};
  }
  enqueue(value){
    this.storage[this.len] = value;
    this.len++;
  }
  dequeue(){
  	var firstEl = this.storage[this.firstKey];
 	if(this.len - this.firstKey <= 0){
 		return 0;
 	} else {
 		delete(this.storage[this.firstKey]);
        this.firstKey++; 
        return firstEl;
 	}

  }
  size(){
  	return this.len - this.firstKey;
  }

}
 var stackstor = new Queue();
