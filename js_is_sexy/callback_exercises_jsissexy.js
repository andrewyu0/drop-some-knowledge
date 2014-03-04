// Feb 17

// http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/#What_is_a_Callback_or_Higher-order_Function

/**** Using named or anonymous functions as callbacks ****/

//global variable 
var allUserData = [];

function logStuff(userData) {
  if (typeof userData == "string"){
    console.log(userData);
  } else if (typeof userData == "object") {
    for (var item in userData) {
      console.log(item + ":" userdata[item]);
    }
  }
}

// some function that takes two params, last one a cb
function getInput (options, cb) {
  allUserData.push(options);
  cb(options);
}

getInput({name: "Rich", specialty: "JS"}, logstuff);
// name: Rich
// speciality: JS


/**** Using 'this' object as callbacks ****/ 


// define object w some properties and method
// pass method as a cb function to another function
var clientData = {
  id: 12345,
  fullName: "Not Set",
  //setUserName is method on clientData object
  setUserName: function(first, last) {
    //this refers to fullName prop in this object
    this.fullName = first + " " + last;
  }
}

function getUserInput(first, last, cb){
  // Do other stuff to validate first/last name here
  // save the names 
  cb(first, last);
}

// getUserInput is a GLOBAL function, THUS this.fullName will NOT set fullName property on clientData obj, instead will set fullNAme on the window obj. This happens bc the 'this' obj in the global function points to the window object
getUserInput("Barack", "Obama", clientData.setUserName);
console.log(clientData.fullName); // Not Set 
console.log(window.fullName); // Barack Obama 


/**** Use Call/Apply Function to Preserve 'this' ****/


// add extra parameter for the callback object called "cbObj"
function getUserInput(first, last, cb, callbackObj){
  // Do other stuff to validate first/last name here
  // use of Apply function will set this object = cbObj
  // apply's 1) param = value to be used as 'this' 2) param = array of values/args to pass to the function
  cb.apply(callbackObj, [first, last]);
}

// pass the clientData.setUserName method and clientData obj as params. clientData obj will be used by Apply to set the 'this' object
getUserInput("Barack", "Obama", clientData.setUserName, clientData);

console.log(clientData.fullName) // Barack Obama 



/******** Creating Callbacks ***********/

// Remember would WOULD have been the return of the normal function will be param for the callback (as well as some params of the regular function itself)

function poemMaker(name, gender) {
  console.log(name + "is cool and a " + gender + "of awesomeness.");
}

function getUserInput(first, last, gender, callback){
  var fullName = first + " " + last;
  // make sure callback is a function
  if(typeof callback === "function") {
    callback(fullName, gender);
  }
}

getUserInput("Michael", "Fassbender", "Man ",  poemMaker); // "Robert Downey Jr is cool and a Man of awesomeness" 


/******** GENERAL, Final Thoughts ************/


// Prevent Callback Hell

// Name your functions and declare them and pass just the name of the function as the callback, instead of defining an anonymous function in the parameter of the main function.
// Modularity: Separate your code into modules, so you can export a section of code that does a particular job. Then you can import that module into your larger application.



// You should look at your own code for opportunities to use callback functions, for they will allow you to:

// Not repeat code (DRY—Do Not Repeat Yourself)
// Implement better abstraction where you can have more generic functions that are versatile (can handle all sorts of functionalities)
// Have better maintainability
// Have more readable code
// Have more specialized functions.



// Here are common ways callback functions are frequently used in JavaScript programming, especially in modern web application development and in libraries and frameworks: 

// For asynchronous execution (such as reading files, and making HTTP requests)
// In Event Listeners/Handlers
// In setTimeout and setInterval methods
// For Generalization: code conciseness

// JavaScript callback functions are wonderful and powerful to use and they provide great benefits to your web applications and to your code. You should use them when the need arises; look for ways to refactor your code for Abstraction, Maintainability, and Readability with callback functions.

