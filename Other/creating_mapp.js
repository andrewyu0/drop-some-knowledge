// Nov 21
// Creating Map 


Array.prototype.mapp = function(callback) {
  var newArray = [];
  for(var i = 0; i < this.length; i++){
    newArray.push(callback(this[i]));
  }
  return newArray;
}

var x = [1,2,3];

x.mapp(function(ele) {
  return ele * 3;
}) // [3, 6, 9]