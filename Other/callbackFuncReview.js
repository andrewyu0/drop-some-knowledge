//Dec 10
// Solidifying understanding of callback functions.
// Going through examples given in http://recurial.com/programming/understanding-callback-functions-in-javascript/


// Demonstrating functions as objects 
var func_multiply = new Function("arg1", "arg2", "return arg1 * arg2;");
func_multiply(5,10); // => 50

// Passing a function as a callback
// defining function with the callback argument 
function some_function(arg1, arg2, callback) {
  // this generates random number between arg1 and arg2
  // part of the function that only deals with arg1 and arg2
  var my_number = Math.ceil(Math.random()*(arg1 - arg2) + arg2);
  // done with this, so we'll call the callback and pass the result
  // basic example
  callback(my_number);
}

// call the function
some_function(5, 15, function(num) {
  // this anonymous function will run when the callback is called
  console.log("Callback called!" + num)
}

// Another example, defining the callback differently 
function some_function(arg1, arg2, callback) {
  var my_number = Math.ceil(Math.random() *
    (arg1 - arg2) + arg2);
  callback(my_number);
}

// call the function
some_function(5, 15, function(x) {
  console.log( x * 1000);
});

// // comprehensive example that uses AJAX to lad an XML file
// function some_function2(url, callback) {
//   var httpRequest; // create our XMLHttpRequest object
//   if (window.XMLHttpRequest) {
//     httpRequest = new XMLHttpRequest();
//   } else if (window.ActiveXObject) {
//     // apparently a dumb Internet Explorer thing here?
//     httpRequest = new
//       ActiveXObject("Microsoft.XMLHttp");
//   }

//   httpRequest.onreadystatechange = function() {
//     // inline function to check the status of request
//     // this is called on every state change
//     if (httpRequest.readyState === 4 && httpRequest.status === 200){
//       callback.call(httpRequest.responseXML);
//       // call the callback function
//     }      
//   };

//   httpRequest.open('GET', url);
//   httpRequest.send();
// }

// // call the function
// some_function2("text.xml", function() {
//   console.log(this);
// });
// console.log("this will run before the above callback");

---------------
// Simple examples from http://www.impressivewebs.com/callback-functions-javascript/

// writing a callback
function mySandwich(arg1, arg2, callback) {
  console.log('Started eating my sandwich. \n\nIt has: ' + arg1 + ', ' + arg2);
  callback();
};

mySandwich('ham', 'cheese', function(){
  console.log('Finished eating my sandwich.');
});

// making the callback optional
function mySandwich(arg1, arg2, callback) {
  console.log('Started eating my sandwich. \n\nIt has: ' + arg1 + ', ' + arg2);
  if (callback) {
    callback();
  }
}


