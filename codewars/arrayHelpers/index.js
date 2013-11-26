
// Array Helpers 
// Nov 21 

// In this kata we want to test, if you are able to extend the functionality of standard prototypes. Extend the Array prototype in order to support the methods square(), cube(), average(), sum(), even() and odd().

Array.prototype.square = function(){
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(this[i] * this[i]);
  }
  return newArray;
};

Array.prototype.cube = function(){
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(this[i] * this[i] * this[i]);
  }
  return newArray;
};

Array.prototype.average = function(){
  var x = 0; 
  for (var i = 0; i < this.length; i++) {
    x = x + this[i];
  }
  return x / this.length;
};

Array.prototype.sum = function(){
  var x = 0; 
  for (var i = 0; i < this.length; i++) {
    x = x + this[i];
  }
  return x;
};

Array.prototype.even = function(){
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.odd = function(){
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 != 0) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var numbers = [1, 2, 3, 4, 5];

numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]

// Optimizing my solution, using fancy features 



































// Highest rated answers

var prot = Array.prototype;
function wrap(name, args) {
  return function () {
    return this[name].apply(this, args);
  };
}
prot.square = wrap('map', [function (n) { return n * n; }]);
prot.cube = wrap('map', [function (n) { return n * n * n; }]);
prot.average = wrap('reduce', [function (avg, n, i, arr) { return (avg || 0) + n / arr.length; }, NaN]);
prot.sum = wrap('reduce', [function (sum, n) { return sum + n; }, 0]);
prot.even = wrap('filter', [function (n) { return n % 2 === 0; }]);
prot.odd = wrap('filter', [function (n) { return n % 2; }]);