// The Essentials of Writing High Quality JavaScript 
// Link http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/?utm_source=javascriptweekly&utm_medium=email

/* Writing Maintainable Code */
// Write readable, consistent, predictable, documented code.

/* Minimizing Globals */

// Creating and accessing global variable in browser env
myglobal = "hello";
console.log(myglobal);
console.log(window.myglobal);
console.log(window["myglobal"]);
console.log(this.myglobal);

/* Problem w Globals */

// JS notion of implied globals makes function dec problematic

function sum(x,y) {
  // antipattern: implied global
  result = x + y;
  return result
}

// use of var prevents this, 'result' is now local
function sum(x,y) {
  var result = x + y;
  return result
}

// another instance of implied global
function foo() {
  // antipattern, a is local, but b becomes global
  var a = b = 0;
}

// same as:
var a = (b = 0);

/* Side effects when forgetting var */

// implied globals created without var can be deleted 

// define three globals
var global_var = 1;
global_novar = 2; // antipattern
( function() {
  global_fromfunc = 3; // antipattern
}());

// attempt to delete 
delete global_var; // false
delete global_novar; // true
delete global_fromfunc; // true 


/* Single var Pattern */ 

// many advantages to using single var statement at top of functions 

function func() {
  var a = 1,
      b = 2,
      sum = a + b,
      myObject = {},
      i,
      j;
  // function body
}

/* Hoisting: A Problem with Scattered vars */

// For JavaScript, as long as a variable is in the same scope (same function), it’s considered declared, even when it’s used before the var declaration. Take a look at this example:

// antipattern   
myname = "global"; // global variable   
function func() {  
    alert(myname); // "undefined" - bc myname is considered declared as a local var of the function, even if it comes after  
    var myname = "local";   
    alert(myname); // "local"  
}   
func();  

/****** for Loops ******/

// Tips on how to effectively use the iterator

/****** for in Loops ******/

