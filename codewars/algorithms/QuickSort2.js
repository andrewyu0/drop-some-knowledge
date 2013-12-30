// Quicksort is generally considered to be efficient and fast, is used by V8 as the implementation for Array.prototype.sort() (on arrays with more than 23 items)

// Pick an element, P (the pivot)
// Rearrange elements into 3 sub blocks
// 1. those <= P (left block S1)
// 2. P (only element in the middle block)
// 3. those >= P (right block S2)
// Repeat the process recursively for the left and right sub blocks

// Selecting pivot - you want middle array for best-case performance (array.length/2)

// swap function, this switches elements at different indices, using a temp variable

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;

}

/*
partition function

params 
- array to sort
- index where left pointer should start
- index where right pointer should start
*/
function partition(items, left, right) {
  // determines pivot 
  var pivot = items[Math.floor((right + left) / 2)],
  i = left,
  j = right;

    while (i <= j) {

      while (items[i] < pivot) {
        i++;
      }

      while (items[j] > pivot) {
        j--;
      }

      if (i <= j) {
        swap(items, i, j);
        // after the swap, both pointers shift one space
        i++;
        j--;
      }    
      // left pointer is returned to determine where to start partitioning the next time
      return i;
    }

};

partition([1,2,3,4,5,20], 1, 6);

/*
params 
- array to sort
- index where left pointer should start
- index where right pointer should start
*/
function quickSort (items, left, right) {

  var index;

  // array of 1 is already ordered
  if (items.length > 1) {
    // index = i after partitioning
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right)
  }

}