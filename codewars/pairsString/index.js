// Dec 6
// Adjacent pairs in a string

// Supplied with a single string, return the number of all adjacent pairs in that string.

// The words within the string are separated by whitespace.

// The function should be case-insensitive (i.e., the input string "orange OrAnGe" is a match).

// //returns 0
// countAdjacentPairs('') 

// // returns 1
// countAdjacentPairs('cat dog dog') 

// // returns 1 (The first pair has been matched, and will be ignored from then on).
// countAdjacentPairs('dog dog dog') 

// // returns 2
// countAdjacentPairs('cat cat dog dog cat')


// My Solution
function countAdjacentPairs(searchString) {
  var string = searchString.toUpperCase();
  var array =  string.split(' ');
  var counter = 0;
  for (var i = 1; i < array.length; i++){
    if (array[i] == array[i - 1]){
      // If it is a pair, add to the counter..
      counter = counter + 1;
      // ..and then skip the one after it (to avoid counting pairs if there are 3 in a row)
      i++;
    }
  }
  return counter;
};

countAdjacentPairs('cat dog dog dog dog'); // 2

// Highest Rated Solution
function countAdjacentPairs(searchString) {
  // returns array        
  var matches = searchString.match(/(\b\w+\b)\s+\1/gi)
  return matches ? matches.length : 0
}



