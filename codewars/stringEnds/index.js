// Nov 12 

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc, 'd') // returns false


// Initial Thoughts

function solution(str, ending){

// make the strings arrays 
  var strArray = str.split();
  var endingArray = ending.split();

// check to see if last characters array match w each other, loop
for (var i = 0; i < ) {
  if (endingArray[endingArray.length-1] == strArray[strArray.length-1]) {
  // keep looking to see if the last value in endingArray matches strArray
  // stop until done with the whole length of endingArray
  return true;
  } else {
    return false;
  }
}