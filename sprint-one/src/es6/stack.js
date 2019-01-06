class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.len = 0;
  	this.storage = {};
  }
  push(value){
  	this.storage[this.len] = value;
    this.len++;

  }
  pop(){
  var lastVal = this.storage[this.len-1];
    delete this.storage[this.len]; 
    this.len--;
    if(this.len < 0){
       this.len = 0;
    }
    return lastVal;
  }
  size(){
  	return this.len;
  }

}

 var stackstor = new Stack();
