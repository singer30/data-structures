var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
 if(!this._storage.includes(item)){
 this._storage.push(item);
 }
 //return false;
};

setPrototype.contains = function(item) {
if( this._storage.includes(item)){
	return true;
}
   return false;
};

setPrototype.remove = function(item) {
	if( this._storage.includes(item)){
	this._storage.pop(item);
}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
