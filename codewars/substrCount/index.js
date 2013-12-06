// Nov 23

// Return substring instance count

// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:
// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1


// SOLUTION
function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;
}

solution('aa_bb_cc_dd_bb_e', 'bb'); //3
solution("there are a lot of re in this sentence. re", "re"); // 4 

// CONCEPTS

// string.match
var fullString = "This is a string.";
// the g searches whole string, beyond first occurance
var searchText = fullString.match(/is/g);  
console.log(searchText.length); // 2, actually counts the number of times 

// Replacing regex with a variable in string.match
var fullString = "the whole thing the";
var searchText = "the";
var count = f.match(s);
console.log(count); // ["the"], only returns the one instance 

// substring
"andrew".substring(0,3); // "and"

// indexOf
var s = "foolhardy";
console.log(s.indexOf("ha")); // 4, position of the string 

