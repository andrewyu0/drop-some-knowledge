// Nov 21 
// create reduse 

// use it and return product of array 

Array.prototype.reduse = function(callback, init) {
  var x = init;
  for (var i = 0; i < this.length; i++) {
      x = callback(x, this[i], i, this);
    }
  return x;
};


var numbers = [1,2,3,4,5,6];

var allMultiples = numbers.reduse(function(prev,cur) {
  if(cur % 3 === 0) {
    prev.push(cur);
  }

  return prev;
},[]);

console.log(allMultiples); // [3,6]

/************/

// Solo:
// My exercise, rewriting reduse and returning product of an array 

Array.prototype.reduse = function(callback, init) {
  var x = init;
  for(var i = 0; i < this.length; i++) {
    x = callback(x, this[i], i, this)
  }
  return x;
};

var numbers = [1, 2, 3, 7];

var fortytwo = numbers.reduse(function(prev, cur) {
  return prev * cur;
}, 1)

console.log(fortytwo); // 42 