// Nov 19
// Custom each() Array method 

// JavaScript provides an Array.prototype.forEach method that allows you to iterate over array values. For this exercise you will create your own array method called 'each'. It will be similar to the forEach method, except for one difference. If the callback function returns true then the loop will stop and no additional values will be iterated.

// The following shows a contrived example of how this new method would be used:

var letters = ['a', 'b', 'c', 'd', 'e']
var allowedLetters = []
letters.each(function(letter, index){
  // break out of the loop if we reached a letter with the value 'd'
  if(letter == 'd') {
    return true;
  }
  allowedLetters.push(letter);   
})
// allowedLetters should equal ['a', 'b', 'c']

/**Solution**/

// extend Array so that it supports our new each() method

Array.prototype.each = function(callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      break;
    }
  }
}

/*****************************/
/*****STEPS TO RECREATE*******/



// 1. Prove that the function will act like forEach and return all elements
Array.prototype.each = function() {
  for (var i = 0; i < this.length; i++){
    console.log(this[i])
  }
}

// 2. Prove that the function can take in a callback function

Array.prototype.each = function(callback) {
  for (var i = 0; i < this.length; i++){
    callback(this[i]) // callback param is element of the array
  }
}

[1,2,3].each(function(x) {
 console.log(x);
}); // 1 2 3 

// 3. Add the functionality that if the callback function returns true, then the loop will stop and no additional values will be iterated (also add index as a parameter of the callback function)

Array.prototype.each = function(callback){
  for (var i = 0; i < this.length; i++){
    if (callback(this[i], i)) {
      break;
    }
  }
}
