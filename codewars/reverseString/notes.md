/****String.split****/

Splits a String object into an array of strings by separating the string into substrings. Returns new array. 

If separator is an empty string, string is converted to an array of characters.
 
string.split([separator][, limit])

// Example

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  print('The original string is: "' + stringToSplit + '"');
  print("The array has " + arrayOfStrings.length + " elements: ");

  for (var i=0; i < arrayOfStrings.length; i++)
    print(arrayOfStrings[i] + " / "); // return array as a string 
}

var tempestString = "Oh brave new world";
var comma = ",";

splitString(tempestString, comma); 
// The original string is: "Oh,brave,new,world"
// The array has 4 elements: Oh / brave / new / world

/****Array.reverse****/

Reverses an array in place.  The first array element becomes the last and the last becomes the first.

// Example

var myArray = [1,2,3,4];
return myArray.reverse(); // [4,3,2,1]

/****.join****/

Joins all elements of an array into a string. Separator: Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma.

string = array.join(separator



