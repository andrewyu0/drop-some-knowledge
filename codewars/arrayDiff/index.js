// array.diff
// Feb 16 

//assuming that b is always going to be one element?

function array_diff(a, b) {
  for(var i = 0; i < a.length; i++){
    // use indexOf to see if the character exists in the array a 
    if(a.indexOf(b[0]) > -1){
      // indexOf gives you the index
      var index = a.indexOf(b[0]);
      console.log(index);
      // splice will remove the element at that index
      a.splice(index, 1);
    }
  }
  return a;
};

array_diff([2,3,4,2,2], [2]); // [3,4]



// Highest rated answer 

function array_diff(a, b) {
  // filter reates a new array with all elements that pass the test implemented by the provided callback function.
  // the callback is invoked w the 1. value of element 2. index of element 3. array object being traversed 
  // x is the element in array a 
  return a.filter(function(x) {
    // returns false for elements that are in a as well as b 
    // thus, filter makes sure those are not included in the final array
    return !(b.indexOf(x) > -1);
  });
}

