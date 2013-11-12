//Nov 8th or something

EXERCISE 2: Javascript Array Filter 
//JavaScript Array's support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// NOTES: 
// variable scoping, scoping in general
// semicolons: only for expressions, be wary 
// JS questions, google "How to append an array in Javascript"

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  var newArray = [];
  for (var i = 0; i< numbersArray.length; i++) {
    if (numbersArray[i] % 2 == 0) {
      newArray.push(numbersArray[i]);
    }      
  }
  return newArray;
}

// Alternative solution: using the FILTER function 
// syntax: var filteredArray = array.filter(callback [, contextObject])

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(n){
    return n % 2 == 0;
  });
}
