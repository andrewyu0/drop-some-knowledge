// Dec 6
// Object Extend 

// Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

// The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

// Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

// extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
// extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
// extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
// extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}


// My Solution (w Jason)

var extend = function(object) {
  var result = {};
  // looping through multiple params
  for (var x = 0; x < arguments.length; x++){
    // checks to see if the param is an object, to ignore any param that is not an object (isObject was defined spec in the kata)
//    if (isObject(object)) {
      for (var i in arguments[x]) {
        // If the obj has its own property & its not already in the result{}
        if (arguments[x].hasOwnProperty(i) && result.hasOwnProperty(i) == false) {
          // the object's prop is now result{}'s prop
          result[i] = arguments[x][i];
        }
//      }
    }   
  }
  return result;
};

extend({a:1,b:2,c:3,d:4, e:5}, {e:6, f:7}, true, 3); // {a: 1, b: 2, c: 3, d: 4, e: 5, f:7}


// Highest Rated Solution

var extend = function() {
  return Array.prototype.slice
    .call(arguments, 0)
    .reduce(function(a,o) {
      if(isObject(o)) {
        Object.keys(o).forEach(function(k) {
          if(!a.hasOwnProperty(k))
            a[k] = o[k];
        });
      }
      return a;
    }, {});
}


