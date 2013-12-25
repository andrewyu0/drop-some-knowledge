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


function mergeSorted(left, right){
  var resultArray = [];
  var leftLength = left.length;
  var rightLength = right.length;

  for (leftIndex = 0, rightIndex = 0; leftIndex < leftLength || rightIndex < rightLength;) {

    if (leftIndex < leftLength && rightIndex < rightLength) {
      if (left[leftIndex] <= right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++
      }

    } else if (leftIndex < leftLength){
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray;
}

mergeSorted([1,2],[3,4,5,6]);

// Highest Rated

function mergesorted(a, b) {
   var ret = [];
   while (a.length && b.length)
   {
     ret.push((a[0] < b[0] ? a.shift() : b.shift()));
   }
  return ret.concat((a.length ? a : b));
}