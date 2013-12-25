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

