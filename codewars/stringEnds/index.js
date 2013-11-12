// Nov 12 

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc, 'd') // returns false


// Initial Thoughts

function solution(str, ending) {
// make the strings arrays 
  var strArray = str.split();
  var endingArray = ending.split();


// check to see if last characters array match w each other, loop
for (var i = endingArray.length, i = strArray.length; i > 0; i-- ) { //two intializers?
  

  if (endingArray[(endingArray.length)-1] == strArray[]) {
      
      // if i != 0 , keep looping
    }
    // you keep looping an realize that before it hits zero 
    else if (endingArray[i] =! strArray[i]) {
    return false;

    //if it holds true throughout the whole loop
    return true; 

    else {
    return false; //this is when the last letters dont match right off the bat
  }
}