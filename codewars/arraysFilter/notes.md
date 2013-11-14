// Array filter method

// Creates a new array with all elements that pass the test implemented by the provided function.

// Syntax

array.filter(callback[, thisObject])

// Example: 

function biggerThanTen(element) {
  return element >= 10;
}

var filtered = [12,5,8,130,44].filter(biggerThanTen);
// filtered is [12, 130, 44]