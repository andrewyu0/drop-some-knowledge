// Nov 13 

Complete the solution, so that it returns the truncated version of the string followed by '...'.

Example:

solution('Testing String',3) // should return 'Tes...'
solution('Testing String',8) // should return 'Testing ...'
solution('Test',8) // should return 'Test


// First Attempt - worked!

function solution(string,limit){
  if (limit >= string.length) {
    return string;
  } else {
    var newString = string.substring(0,limit); //utilize substring 
    return newString + "...";  
  }
}