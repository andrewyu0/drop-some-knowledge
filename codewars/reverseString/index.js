// Nov 12 

Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

//Initial thoughts
        //breakup string taking last letters off it
        // append string to an array
        // concatenate strings in the array 

function solution(str) {
  return str.split('').reverse().join('');
}

solution('world'); // returns 'dlrow'

// This was also highest voted solution 