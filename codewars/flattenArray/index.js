// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// My Solution

function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result = result.concat(array[i]);
  }
  return result;
};

// Highest Voted Solution

var flatten = function (lol){
  // Using 'apply' method 
  return [].concat.apply([],lol);
}

