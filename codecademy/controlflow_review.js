/********** Control Flow **********/

// If Else 

var isEven = function(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Else if 

var isEven = function(number) {
  if (number % 2 === 0) {
    return true;
  } else if (isNaN(number)) { //checks to see if its not a number
    return "It's not even a string";
  } else {
    return false;
  }
}

// for, while loops 

// switch 

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}

var answer = prompt("what is the cutest type of dog?");

switch(answer) {
  case 'elmo':
    console.log("That's right!");
    break;
  // Add your code here!
  case 'chihuahua':
    console.log("sometimes");
    break;
  default:
    console.log("this is the default");
}

// Logical operators
// &&, ||, ! 
