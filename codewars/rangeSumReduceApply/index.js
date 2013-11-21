// Nov 8th 

// The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum . Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

// Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

// Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

// While not forbidden try to write both function without using a for loop


Array.range = function(start, count) {  
var newArray = [];
 for (var i = start; i < start + count; i++) {
    newArray.push(i);
    }
  return newArray;
}

Array.prototype.sum = function() {
  var x = 0;
  for (var i = 0; i < this.length; i++) {
    x = x + this[i]; 
  }
  return x ;
} 


-------------

// my attempt, try to create Array.prototype.sum that does not use for loops 
//introduction of [].reduce 

//refer back to documentation about 'reduce'

Array.prototype.sum = function() {
  this.reduce(function(a,b) {
    return a + b;
  });
}
// returns undefined

---------------

// Top rated answer 
Array.range = function(start, count){
  return Array.apply(null, {length: count})
              .map(function(v,i){return start + i})
}

Array.prototype.sum = function(){
  return this.reduce(function(s,v){return s + v}, 0) 
}
// zero is the intial value, if you didn't declare it (like in my attempt) it wouldn't know what to add to. So if you pass the 0 it will know to add to that 0 for each return 



