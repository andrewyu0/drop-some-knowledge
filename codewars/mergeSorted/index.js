// Dec 19
// Implementing MergeSort "merge" function

/*
Strategy of MS is simple and profound, leveraging two simple facts:
1. Every list of 1 element is "sorted"
2. It is easier to combine 2 already sorted lists into 1 sorted, than it is to sort a big list all at once
Yields an algorithm with worst-case complexity of O(n log n)

How it works:
1. Get a list of size 1, its already sorted, done. Return that value.
2. Otherwise, break list in half
2a. MergeSort the first half
2b. MergeSort the second half
2c. "Merege" the two sorted lists for 2a and 2b together. This is where the "merge" function comes in, taking two already sorted lists and returns one large sorted list

Function should return big sorted array from two smaller sorted arrays.

meregesorted([1,2],[3,4]) // [1,2,3,4]

*/


function mergesorted(a, b){
  var array = [];
  for (var i = 0; i < a.length; )


  return array;
}