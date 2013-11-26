// Nov 26
// squareSum

// Complete the squareSum method so that it squares each number passed into it and then sums the results together.

// For example:
// squareSum([1,2, 2]); // should return 9

// My Solution

function squareSum(numbers) {
  array = numbers.map(function(x) {return x * x});
  return array.reduce(function(prev,cur){return prev + cur});
}; 

squareSum([1,2, 2]);

//Highest Voted Solution

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
};