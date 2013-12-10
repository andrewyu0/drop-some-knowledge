// Dec 9
// wrappedFunction

// Create a function method that allow you to wrap an existing function. The method signature would look something like this:

// Usage Example:

function speak(name){
   return "Hello " + name;
};

speak = speak.wrap(
  function(original, yourName, myName){
  //greeting = "Hello Mary"
   greeting = original(yourName);
   return greeting + ", my name is " + myName; 
});

var greetingz = speak("Mary", "Kate"); 
console.log(greetingz); // "Hello Mary, my name is Kate"

/// Without wrap... 

function speak(name){
  return "Hello " + name;
};

var _speak = speak;

speak = function(name, name2){
  return _speak(name) + " and " + name2 + ", my homies";
};

speak("Andrew", "John"); // "Hello Andrew and John, my homies"



// My Attempt

Function.prototype.wrap = function(callback){
  var original = this;
  return callback(){
    return original.apply(this, arguments);
  };
};



