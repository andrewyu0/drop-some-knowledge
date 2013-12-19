/********************For Loops*/


// General comments, from Jason
// Left - assignment, the variable doesn't have to be used and can be initialized with a comma
// Center - Condition for when the loop ends, doesnt have to relate to values on left or right
// Right - what should happen after each iteration of the loop



for (var i = 1; i < 11; i = i + 1) {
        code code code; 
    }

for(var i = 8 ; i < 120; i+= 12){ //increment up by 12
  console.log(i);
}

for (var i = 100; i >= 0; i-= 5) {
  console.log(i);
}

// Arrays

var array = [];

//Looping through arrays 
var cities = ["LA", "SF",];

for (var i = 0; i < cities.length; i ++) {
  console.log("I would like to visit" + cities[i]);
}

//Finding largest number in array
var array = [1,2,3,4,5,6];
var largest = 0;
for (var i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest); //or return it outside the loop 

