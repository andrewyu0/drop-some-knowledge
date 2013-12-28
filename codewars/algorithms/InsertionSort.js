/*
Insertion Sort
--------------
Advantages:
    - simple implementation
    - efficient for small data sets
    - efficient at sorting partially sorted datasets
    - can sort list as it is recieved
    - in-place
    - stable
Disadvantages:
    - quadratic time complexity
Time Complexity:
    - worst:   O(n^2)
    - average: O(n^2)
    - best:    O(n)
Space Complexity:
    - O(n)

When humans sort something manually, usually use this     
*/

function insertionSort(array) {
  var size = array.length;
  for (var i = 1; i < size; i++) {
    // iterate in reverse until element copy[j] >= copy[j-1]
    // copy[j] should be >= copy[j-1]
    for (var j = i; j > 0; j --) {
      // if elements are out of order swap them using a temporary variable
      // e.g. using [2,1] to illustrate:
      if (array[j] < array[j-1]) {
        var temp = array[j-1]; // temp is 2
        array[j-1] = array[j]; // 2 is now 1
        array[j] = temp; // 1 is now 2
      } else {
        // out of loop, i++ to next element
        break
      }
    }
  }
  return array;
};

var array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Unsorted list: ", array); // "Unsorted list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"
array = insertionSort(array);
console.log("Sorted list: ", array); // "Sorted list "
