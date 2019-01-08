

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check storage[index] 
  //Create our bucket
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [0, tuple]);
  } else {
    // dig to the bottom level of storage index,
    // if (hashtable at our index and desired key is undefined)
    // push tuple into the array at index;
    // else, set the key and value to the new tuple.
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] !== k) {
        this._storage.get(index).push(tuple);
      } else {
        this._storage.get(index)[i] = tuple;
      }
    }
  }
  
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      } 
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    this._storage.get(index).splice(i, 2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


