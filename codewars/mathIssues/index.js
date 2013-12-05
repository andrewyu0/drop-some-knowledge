// Dec 3
// <Math Issues 

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
  return (number + 0.5)|0;
};

Math.ceil = function(number) {
  return (number|0) < number ? (number + 1)|0 : number|0;
};

Math.floor = function(number) {
  return number|0;
};

//Other solution

Math.round = function(number) {
  return Math.floor( number + 0.5 );
};

Math.ceil = function(number) {
  if( number != ~~number )
    number = ~~(number+1)
    
  return number;
};

Math.floor = function(number) {
  return ~~number;
};