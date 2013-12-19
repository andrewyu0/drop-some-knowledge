// Dec 17
// Understanding async vs. sync 

//call back param can be ANYTHING. as long A parameter is passed when the function is invoked
function sum(a, b, callback){
  var result = a + b;
  callback(result);
}

function sum(a, b, callback){
  var x = a + b;
  callback(x);
}

function sum(a, b, callback){
  var y = a + b;
  callback(y);
};

// add 42 and 5 using sum and log
// can call paramter anything
sum(42, 5, function(whatever) {
  console.log(whatever);
});


// create function that squares, synchronously
function pow2(x) {
  return x * x;
}
// pass 2 and log 4
console.log(pow2(2));

// create function that squares, asynchronously
function pow2(x, callback) {
  callback(x * x);
}
// pass 2 and log 4
pow2(2, function(whatever){
  console.log(whatever);
})


// Train function
function train(x) {
  return x + (x + 1) + (x + 2);
};

// write asynchronously
function train(x, callback){
  callback (x + (x + 1) + (x + 2));
}