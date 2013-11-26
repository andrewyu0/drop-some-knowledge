//Nov 22

//Reverse words 

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string.

// Example:
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"

// reverse string

function solution(str) {
  return str.split('').reverse().join('');
}

solution('world'); // returns 'dlrow'

---------------

// Solution

function reverseWords(str) {
  return str.split(' ').map(function(x){
    return x.split('').reverse().join('')})
  .join(' ');
};

console.log(solution("hello my name is andrew"));

// split the string according to spaces
// map - reverse every element
// join by ''

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}


