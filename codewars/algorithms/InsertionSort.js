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
    // iterate in reverse until element array[j] >= array[j-1]
    // array[j] should be >= array[j-1]
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

/** Summary written to Jason **/

// Take an unsorted array and create a for loop that initializes at 1 that increments until i < the size of that unsorted array (this is the over arching for loop whose job is to run through all the elements of the array).

// Within the loop, create another for loop, whose job is to compare array[i] to array[i - 1]. Set new initializer j to i so that j can iterate in reverse independent of i (which is used to maintain position in the over arching for loop). j should iterate in reverse under the condition that j > 0 to prevent j from comparing to negative indexed elements. In this for loop, create an if statement that compares array[j] to previous element array[j-1]. If array[j] is unordered ( < array[j-1] ), swap them using a temp variable. Otherwise, break from the loop. 

// The overarching loop is called again, and the entire code runs until the loop has gone through all elements in the array. Once this is complete, return the sorted array. 

// My rewrite and refactor

function swap (arr, left, right) {
  var temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;
}

function insertionSort(arrayToSort) {
  var size = arrayToSort.length;
  for (var i = 1; i < size; i++) {
    for (var j = i; j > 0; j--) {
      if (arrayToSort[j] < arrayToSort[j - 1]) { 
        swap(arrayToSort, j- 1, j);
      } else {
        break
      }
    }
  }

  return arrayToSort;

};

insertionSort([1,2,3,4,5,6,5,4,3,2,1]);
