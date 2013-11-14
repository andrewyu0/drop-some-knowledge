// Nov 12 
// "String ends with?"

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc, 'd') // returns false


// Initial Thoughts

function solution(str, ending) {

  var strArray = str.split("");
  var endingArray = ending.split("");

  for (var endCount = endingArray.length - 1, strCount = strArray.length - 1; endCount >= 0; strCount--, endCount--) {
    if (endingArray[endCount] !== strArray[strCount]) {
      return false;
    }
  }
  return true;
}

// Top voted solution 

function solution(str, ending){
  return str.substring(str.length - ending.length) == ending;
}

// Also - you can treat a string like an array
// so "abc".length = 3 and "abc"[1] = "b"