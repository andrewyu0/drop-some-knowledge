// Dec 18
// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// solution('camelCasing') should return 'camel Casing'

// My Solution
function solution(string) {
 
  var array2 = [];
  var array = string.split('');

  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      array2.push(" "+array[i]);
    } else {
      array2.push(array[i]);
    }
  } 
  return array2.join(''); 
}


solution("andrewYu"); // "andrew Yu"



//Highest Rated

function solution(string) {
    return string.replace( /([A-Z])/g , " $1");
}

solution("andrewYu"); // "andrew Yu"
